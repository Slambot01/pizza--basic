import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello React!!!!</h1>
      <Header />
      <Menu />
      <Footer />
      {/* //we nested thids pizza component inside this app component. */}
    </div>
  );
}

function Header() {
  //   const style = {
  //     color: "green",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}>fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  //   const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Six creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          We're currently still working on our Pizzas.Please wait and come back
          later.
        </p>
      )}

      {/* <Pizza
        name="Pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={20}
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mushrooms, spinach, and  cheese"
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <div
      className={`pizza ${
        pizzaObj.soldOut ? "sold-out" : ""
      }                  `}
    >
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 7}</span>
      </li>
    </div>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const openhours = 12;
  const closedhours = 22;

  const isopen = Hour >= openhours && Hour <= closedhours;

  //   if (Hour >= openhours && Hour <= closedhours) alert("We're currently open ");
  //   else alert("we're currently closed");

  //   return (
  //     <footer className="footer">
  //       {new Date().toLocaleTimeString()}.We're currently open
  //     </footer>
  //   );

  return (
    <footer className="footer">
      {isopen ? (
        <div className="order">
          <p>
            We're open until {closedhours}:00.Come visit us tomorrow or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We're happy to </p>
      )}
    </footer>
  );
}

//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
//strict mode is used to check for ceratin bugs by renderinf the parts twice
root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);
