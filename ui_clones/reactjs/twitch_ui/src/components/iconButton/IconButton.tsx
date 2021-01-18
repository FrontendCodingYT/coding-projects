import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";

import "./IconButton.css";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  tooltipDirection?: TooltipDirection
  tooltip?: string
  number?: Number
}

export enum TooltipDirection {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT
}

export default function IconButton({Icon, tooltipDirection, tooltip, number}: Props) {
  function getTooltip(direction: TooltipDirection | undefined) {
    if(direction === undefined) {
      return tooltip && <span className="tooltip tooltip-bottom">{tooltip}</span>
    } else if(direction === TooltipDirection.BOTTOM) {
      return tooltip && <span className="tooltip tooltip-bottom">{tooltip}</span>
    } else if(direction === TooltipDirection.RIGHT) {
      return tooltip && <span className="tooltip tooltip-right">{tooltip}</span>
    }
  }
  
  return (
    <button className="icon-button">
      {number && <span className="number">{number}</span>}
      <Icon/>
      {tooltip && getTooltip(tooltipDirection)}
    </button>
  );
}
