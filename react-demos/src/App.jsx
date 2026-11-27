import Person from "./components/Person";
import Product from "./components/Product";
import Card from "./components/Card";

{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>InValid Password</h1>;
const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;
  // using ternary operator

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const Cart = () => {
  const items = ["wifi earbuds", "powerbanks", "new SSD", "Hoddie", "laptop"];
  // const items = [];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return <Cart />;
};

export default App;
