import React from "react";
import { useForm } from "react-hook-form";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firstbase.jsx";

// functional component
const Login = (props) => {
  // defining States
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      // console.log(response);
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

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
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        New User? Register here.
      </button>
      <button onClick={logGoogleUser}>Sing in with Google </button>
    </div>
  );
};

export default Login;

// import { Link } from "react-router-dom";
{
  /* <Link to="register"> */
}
{
  /* </Link> */
}
{
  /* <DevTool control={control} /> */
}
// import { DevTool } from "@hookform/devtools";
