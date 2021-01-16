import React from "react";

import "./IconButton.css";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function IconButton() {
  return (
    <button className="icon-button">
      <MoreHorizIcon />
      <span className="tooltip">More</span>
    </button>
  );
}
