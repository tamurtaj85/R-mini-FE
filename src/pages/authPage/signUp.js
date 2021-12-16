import React, { useState, useEffect } from "react";
import { Services } from "../../services";
import { SomethingWentWrong } from "../../components/errorHandler/component-somethingWentWrong";
import { GenericSnackbars } from "../../components/snackBar/snackBar";
import { useNavigate } from "react-router-dom";

const SB_DEF_STATE = {
  state: false,
  alertMessage: "Generic Snackbar",
  severity: "primary",
};

// // // // // //
// Component
// // // // // //
export function SignUp(props) {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    pin: "",
  });

  const [userInfo, setUserInfo] = useState(null);

  const [snackBar, setSnackBar] = useState(SB_DEF_STATE);

  // Something Went Wrong
  const [sww, setSWW] = useState(null);

  const navigateTo = useNavigate();

  const { switchCard, getUserInfo } = props;

  async function registerUser() {
    const response = await Services.AuthServices("sign-up", user);
    // console.log(response);

    if (response?.code && response?.message) {
      // Timeout Error or anything else
      //   console.log(response.code, response.message);
      setSWW(response);
      return;
    } else if (response?.status !== 201) {
      // console.log(response.data);
      setSnackBar({
        state: true,
        alertMessage: response.data,
        severity: "warning",
      });
      return;
    }

    setSnackBar({
      state: true,
      alertMessage: "sign up successful",
      severity: "success",
    });
    setUserInfo(response.data);
    setTimeout(() => {
      navigateTo("/products");
    }, 1000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerUser();
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function renderComponent() {
    if (sww)
      return (
        <SomethingWentWrong errorCode={sww.code} errorMessage={sww.message} />
      );

    return (
      <section className="signUp">
        <div className="formContainer signUp">
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
          <h3 className="authMessage">
            Already a user?{" "}
            <button type="button" onClick={switchCard}>
              Sign In
            </button>{" "}
          </h3>
        </div>
        <GenericSnackbars snackBar={snackBar} />
      </section>
    );
  }

  return <>{renderComponent()}</>;
}
