import React, { useState } from "react";
// import Login from "../component/Login";
import "./App.css";
// import Register from "../component/Register";
import Home from "./Home";

const App = () => {
  return <Home />;
};

export default App;

// topics to Conver
// firbase ke through connect

// Password should be a minimum of 6 characters and contain at least one uppercase letter, one lowercase letter, and a number
// return (
//   <div className="App">
//     <h1 className="HnA">H&A Heels</h1>

//     <Router>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/*"
//           element={
//             currForm === "Register" ? (
//               <Register onFormSwitch={toggleForm} />
//             ) : (
//               <Login onFormSwitch={toggleForm} />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   </div>
// );
