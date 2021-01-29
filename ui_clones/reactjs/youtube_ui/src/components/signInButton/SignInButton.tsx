import React from "react";

import "./SignInButton.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle"

export default function SignInButton() {
  return (
    <button className="sign-in-button">
      <AccountCircleIcon />
      <span>SIGN IN</span>
    </button>
  );
}
