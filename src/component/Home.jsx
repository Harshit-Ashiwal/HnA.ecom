import React, { useState } from "react";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
// import logo from "./logo.jpg";
const Home = () => {
  const [currForm, setCurrForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrForm(formName);
  };
  return (
    <div className="App">
      <h1 className="HnA">H&A Heels</h1>

      {/* <img className="HnA" src="logo.png" alt="im here" /> */}
      {/* <img className="HnA" src={logo} alt="im here" /> */}

      {currForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Home;
