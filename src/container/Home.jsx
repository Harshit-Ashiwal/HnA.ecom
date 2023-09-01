import React, { useState } from "react";
import Login from "../component/Login";
import Register from "../component/Register";

const Home = () => {
  const [currForm, setCurrForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrForm(formName);
  };
  return (
    <div className="App">
      <h1 className="HnA">H&A Heels</h1>

      {currForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Home;
