import React, { CSSProperties } from "react";

import "./Link.css";

interface Props {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  style?: CSSProperties
}

export default function Link({ label, primary, secondary, tertiary, style }: Props) {
  if (primary) {
    return (
      <a style={style} className="primary-link" href="/">
        {label}
      </a>
    );
  } else if (secondary) {
    return (
      <a style={style} className="secondary-link" href="/">
        {label}
      </a>
    );
  } else if (tertiary) {
    return (
      <a style={style} className="tertiary-link" href="/">
        {label}
      </a>
    );
  } else {
    return (
      <a style={style} className="primary-link" href="/">
        {label}
      </a>
    );
  }
}
