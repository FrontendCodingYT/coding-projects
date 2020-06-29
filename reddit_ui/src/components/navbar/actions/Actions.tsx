import React from "react";

import "./Actions.css";
import Button from "../../button/Button";

import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function Actions() {
  return (
    <div className="actions">
      <Button label="LOG IN" />
      <Button primary label="SIGN UP" />
      <div className="profile">
        <PersonIcon className="hoverable" />
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </div>
  );
}
