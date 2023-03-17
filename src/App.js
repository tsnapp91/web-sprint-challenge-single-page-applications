import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import schema from "./formSchema";
import * as yup from "yup";
import axios from "axios";

const intialFormValues = {
  customer: "",
  size: "",
  special: "",
  cheese: false,
  pepperoni: false,
  peppers: false,
  sausage: false,
};

const intialFormErrors = {
  customer: "",
  size: "",
  special: "",
};

const intialOrder = [];

export default function App() {
  const [formValues, setFormValues] = useState(intialFormValues);
  const [order, setOrder] = useState(intialOrder);
  const [formErrors, setFormErrors] = useState(intialFormErrors);

  const orderPizza = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(intialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      customer: formValues.customer.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ["cheese", "pepperoni", "peppers", "sausage"].filter(
        (tops) => !!formValues[tops]
      ),
    };
    orderPizza(newOrder);
  };

  return (
    <div className="app">
      <h1>BloomTech Eats</h1>
      <div classname="nav-links">
        <Link to="/">Home</Link>
        <Link to="pizza"></Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="pizza"
          element={
            <Form
              values={formValues}
              change={inputChange}
              submit={submitForm}
              errors={formErrors}
            />
          }
        />
      </Routes>
    </div>
  );
}
