import Greet from "./components/Greet";

{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}

const App = () => {
  const usersInfo = [
    {
      name: "John Doe",
      age: 30,
      location: "New York",
      email: "john@gmail.com",
    },
    {
      name: "Jane Smith",
      age: 25,
      location: "Los Angeles",
      email: "jane@gmail.com",
    },
    {
      name: "Alex Luthor",
      age: 66,
      location: "Metropolis",
      email: "alex@gmail.com",
    },
  ];

  return (
    <main>
      {/*{usersInfo.map((user) => (
      {/*  destruture usersInfo into name, location, age 
      instead of {usersInfo.map((user)  */}
      {usersInfo.map(({ name, location, age, email }) => (
        <ul key={Math.random()}>
          {/* before destructuring = <li>Name: {user.name} */}
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Location: {location}</li>
          <li>Email: {email}</li>
        </ul>
      ))}
    </main>
  );
};

export default App;
