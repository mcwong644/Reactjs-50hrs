import Person from "./components/Person";
import Product from "./components/Product";
import Card from "./components/Card";

{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}
const App = () => {
  return (
    <div>
      <Person name="MCWong" age={28} />
      <hr />
      <Product name="Iphone" price={599} />
      <hr />
      {/* passing props by closing*/}
      <Card>
        <h1> My Card</h1>
        <p>This is some content for Card 1</p>
      </Card>
    </div>
  );
};

export default App;
