{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}
{
  /* import Add from "./components/Add";
 import Greet from "./components/Greeting"; 
import Header from "./components/Header";
import Main from "./components/Main"; */
}
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
const App = () => {
  const name = "John Doe";
  const mutiply = (a, b) => a * b;
  let a = 2;
  let b = 3;
  const specialClass = "special-class";

  return (
    <section id="section">
      {/* <Header/>
      <Main/>
      <Greet/> 
      <Add/>
      <Footer/> */}
      <WelcomeMessage />
      <br />
      <br />
      <hr />
      {/* test jsx  */}
      {a}+{b}={a + b} <br />
      {a} x {b}={mutiply(a, b)}
      <hr />
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter Name" />
        <p>Hello, {name}!</p>
        <button type="submit">Submit</button>
        <br />
      </form>
      <br />
      <p> Friends List: {["alex", "john", "stupid"]}</p>
      <p className={specialClass}> This is special class</p>
      <Footer />
    </section>
  );
};
export default App;
