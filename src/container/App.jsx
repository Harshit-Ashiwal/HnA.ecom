import React, { useState } from "react";
import Login from "../component/Login";
import "./App.css";
import Register from "../component/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [currForm, setCurrForm] = useState("Register");

  const toggleForm = (formName) => {
    setCurrForm(formName);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              currForm === "Register" ? (
                <Register onFormSwitch={toggleForm} />
              ) : (
                <Login onFormSwitch={toggleForm} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// topics to Conver
// firbase ke through connect

//   return (
//     <div className="App">
//       {currForm === "Register" ? (
//         <Register onFormSwitch={toggleForm} />
//       ) : (
//         <Login onFormSwitch={toggleForm} />
//       )}
//     </div>
//   );

// Password should be a minimum of 6 characters and contain at least one uppercase letter, one lowercase letter, and a number
