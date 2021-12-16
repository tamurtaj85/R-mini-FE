import React, { useEffect, useState } from "react";
import { Services } from "../../services";
import { SomethingWentWrong } from "../../components/errorHandler/component-somethingWentWrong";
import { GenericSnackbars } from "../../components/snackBar/snackBar";
import { SB_DEF_STATE } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

// // // // // //
// Component
// // // // // //
export function SignIn(props) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [snackBar, setSnackBar] = useState(SB_DEF_STATE);

  const [userInfo, setUserInfo] = useState(null);

  // Something Went Wrong
  const [sww, setSWW] = useState(null);

  const user = { email, password };

  const navigateTo = useNavigate();

  const { switchCard, getUserInfo } = props;

  // Helper functions
  async function getUserToken() {
    const response = await Services.AuthServices("sign-in", user);
    // console.log(response);

    if (response?.code && response?.message) {
      // Timeout Error or anything else
      // console.log(response.code, response.message);
      setSWW(response);
      return;
    } else if (response?.status !== 200) {
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
      alertMessage: "sign in successful",
      severity: "success",
    });
    setUserInfo(response.data);
    setTimeout(() => {
      navigateTo("/products");
    }, 1000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getUserToken();
    console.log("submit");
    //  setSnackBar(SB_DEF_STATE);
  }

  useEffect(() => {
    getUserInfo(userInfo);
  }, [userInfo]);

  function renderComponent() {
    if (sww)
      return (
        <SomethingWentWrong errorCode={sww.code} errorMessage={sww.message} />
      );
    else {
      return (
        <section className="signIn">
          <div className="formContainer signIn">
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
            <h3 className="authMessage">
              Don't have an account?{" "}
              <button type="button" onClick={switchCard}>
                Sign Up
              </button>{" "}
            </h3>
          </div>
          <GenericSnackbars snackBar={snackBar} />
        </section>
      );
    }
  }

  return <>{renderComponent()}</>;
}
