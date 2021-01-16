import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";

import "./IconButton.css";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  tooltip?: string
  number?: Number
}

export default function IconButton({Icon, tooltip, number}: Props) {
  return (
    <button className="icon-button">
      {number && <span className="number">{number}</span>}
      <Icon/>
      {tooltip && <span className="tooltip">{tooltip}</span>}
    </button>
  );
}
