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

const App = () => {
  return (
    <section>
      <Password isValid={true} />
    </section>
  );
};

export default App;
