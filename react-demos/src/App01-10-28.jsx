import Greet from "./components/Greet";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}
{
  /* use empty <>...</>*/
}
const App = () => {
  return (
    <User
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-OFP4oyXMBrFrge_fFMlcxzmtNiEI4dROXpLy8fzEQ&s=10"
      name="Huxn WebDev"
      age={28}
      isMarried={false}
      hobbies={["coding", "fishing", "sleeping"]}
    />
  );
};

{
  /*const User = (props) => { 
    destructure as below*/
}
const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      {/* b4 destructure <h1>Name: {props.name}</h1> */}
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Marital status: {isMarried}</h1>
      <h1>Hobbies: {hobbies}</h1>
      <img src={img} alt={name} width={200} />
    </section>
  );
};

export default App;
