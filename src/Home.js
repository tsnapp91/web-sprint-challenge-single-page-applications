import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const pizzaForm = () => {
    navigate("pizza");
  };
  return (
    <div classname="home-wrapper">
      <h2>here we go</h2>
      <button onClick={pizzaForm} className="pizzaFormBtn" id="order-pizza">
        order-pizza
      </button>
    </div>
  );
}
