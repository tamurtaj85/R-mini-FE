import React, { useState } from "react";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

export const Auth = (props) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const { setUserInfo } = props;

  const switchCard = () => {
    setShowSignIn(!showSignIn);
  };

  const RenderCard = () => {
    if (!showSignIn) {
      console.log(showSignIn);
      return <SignUp switchCard={switchCard} getUserInfo={setUserInfo} />;
    }
    return <SignIn switchCard={switchCard} getUserInfo={setUserInfo} />;
  };

  return <div className="auth">{RenderCard()}</div>;
};
