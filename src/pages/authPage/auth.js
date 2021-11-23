import React, { useState } from "react";
import { Services } from "../../services";
// import { GenericSnackbars } from "../../components/snackBar/snackBar";

export const Auth = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const switchCard = () => {
    setShowSignIn(!showSignIn);
  };

  const RenderCard = () => {
    if (showSignIn) {
      return (
        <section className="signIn">
          <div className="formContainer signIn">
            <SignIn />
            <h3 className="authMessage">
              Don't have an account?{" "}
              <button type="button" onClick={switchCard}>
                Sign Up
              </button>{" "}
            </h3>
          </div>
        </section>
      );
    }

    return (
      <section className="signUp">
        <div className="formContainer signUp">
          <SignUp />
          <h3 className="authMessage">
            Already a user?{" "}
            <button type="button" onClick={switchCard}>
              Sign In
            </button>{" "}
          </h3>
        </div>
      </section>
    );
  };

  return <div className="auth">{RenderCard()}</div>;
};

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackBar, setSnackBar] = useState({});

  const user = { email, password };

  async function getUserToken() {
    const response = await Services.AuthServices("sign-in", user);
    // console.log(response);

    if (response.status === 200) {
      setSnackBar({
        state: true,
        alertMessage: "Logged In Successfully!",
        severity: "success",
      });
      //   console.log(snackBar);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getUserToken();
  }

  //   useEffect({}, []);

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <input
        className="inpGroup"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inpGroup"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Sign In</button>
    </form>
  );
}

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    pin: "",
  });

  async function registerUser() {
    const response = await Services.AuthServices("sign-up", user);
    console.log(response);
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerUser();
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <input
        className="inpGroup"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={user.fullName}
        onChange={handleChange}
      ></input>
      <input
        className="inpGroup"
        type="text"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      ></input>
      <input
        className="inpGroup"
        type="text"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      ></input>
      <input
        className="inpGroup"
        type="text"
        name="pin"
        placeholder="Pin"
        value={user.pin}
        onChange={handleChange}
      ></input>
      <button type="submit">Sign Up</button>
    </form>
  );
}
