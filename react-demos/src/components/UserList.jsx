import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      location: "New York",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 37,
      location: "New York",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 50,
      location: "New York",
      email: "alice@gmail.com",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Location: {user.location}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
