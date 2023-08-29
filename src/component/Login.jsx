import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// functional component
const Login = (props) => {
  // defining States
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");

  // react-hook-form
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h2 className="cstm-h2">Login</h2>

      <form
        method="post"
        className="login-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <input
          // value={Email}
          // onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Enter Your Email"
          {...register("email", { required: "*Email is required." })}
          // {...register("email")}
        />
        <p className="input-errors">{errors.email?.message}</p>

        <input
          // value={Password}
          // onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="Password "
          {...register("password", { required: "*password is required" })}
        />
        <p className="input-errors">{errors.password?.message}</p>

        <button className="login-btn" type="submit">
          Login{" "}
        </button>
      </form>
      <DevTool control={control} />
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        New User? Register here.
      </button>
    </div>
  );
};

export default Login;
