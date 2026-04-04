import React from "react";

function GreetingCard() {
  const name = "John";
  const date = new Date().toLocaleDateString();

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "250px" }}>
      <h2>Hello, {name}!</h2>
      <p>Welcome to our website.</p>
      <p>Today is {date}</p>
      <button onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default GreetingCard;
