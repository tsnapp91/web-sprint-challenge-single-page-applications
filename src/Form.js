import React from "react";

export default function Form(props) {
  const { values, change, submit, errors } = props;

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(value);
    const valueToBe = type === "checkbox" ? checked : value;
    change(name, valueToBe);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <h1>#pizza-form</h1>

        <div className="errors">
          <div> {errors.customer}</div>
        </div>
        <label>
          Name:
          <input
            id="name-input"
            type="text"
            name="customer"
            value={values.customer}
            onChange={onChange}
          />
        </label>
        <label>
          Size:
          <select
            id="size-dropdown"
            onChange={onChange}
            name="size"
            value={values.size}
          >
            <option value="">---select a size---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <div className="Toppings-checkbox">
          <h4>Toppings</h4>
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={onChange}
            />
          </label>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Peppers
            <input
              type="checkbox"
              name="peppers"
              checked={values.peppers}
              onChange={onChange}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>
        </div>
        <label>
          special instructions:
          <input
            id="special-text"
            type="text"
            name="special"
            value={values.special}
            onChange={onChange}
          />
        </label>

        <input id="order-button" type="submit" value="orderButton" />
      </form>
    </div>
  );
}
