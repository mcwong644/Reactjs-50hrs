import React from "react";

const greet = "Hello: from Greet.jsx";
const date = new Date();
{
  /* https://youtu.be/M9O5AjEFzKw?si=JO__dqb3nFCMxYr0 */
}
{
  /* date.getMonth is zero based. must add 1 */
}

const Greet = () => {
  return (
    <div>
      <h1>{greet}</h1>
      <h2>{date.toLocaleDateString()}</h2>
      <p>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
    </div>
  );
};

export default Greet;
