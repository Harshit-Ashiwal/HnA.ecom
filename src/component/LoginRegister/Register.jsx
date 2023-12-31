import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Register = (props) => {
  // STATE Declaration
  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // const [ConfirmPassword, setConfirmPassword] = useState("");

  //react-hook-form
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  //handleSubmit Function fro prevent refresh page onSubmit form
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h2 className="cstm-h2">Register</h2>
      <form
        method="get"
        className="register-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <input
          // value={Name}
          // onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          id="name"
          {...register("name", { required: "*name is required." })}
          // ref={register({ required: "full name required" })}
        />
        <p className="input-errors">{errors.name?.message}</p>

        <input
          // value={Email}
          // onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Your Email"
          {...register("email", { required: "*email required" })}
        />
        <p className="input-errors">{errors.email?.message}</p>

        <input
          // value={Password}
          // onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="Password "
          {...register("password", { required: "*password required" })}
        />
        <p className="input-errors">{errors.password?.message}</p>

        <input
          // value={ConfirmPassword}
          // onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password "
          {...register("confirmPassword", {
            required: "*confirm password required",
          })}
        />
        <p className="input-errors">{errors.confirmPassword?.message}</p>

        <button className="register-btn" type="submit">
          Register{" "}
        </button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>
        Already created account? Login here.
      </button>
    </div>
  );
};

export default Register;

// import { Link } from "react-router-dom";
// import { DevTool } from "@hookform/devtools";
{
  /* <Link to="login"> */
}
{
  /* </Link> */
}
{
  /* <DevTool control={control} /> */
}
