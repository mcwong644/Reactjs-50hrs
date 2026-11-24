import Greet from "./components/Greet";
import ProductInfo from "./components/ProductInfo";

{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 14];

  return (
    <main>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      <hr />
      <Greet />
      <ProductInfo />
    </main>
  );
};

export default App;
