import React from "react";

import "./Button.css";

interface Props {
  primary?: boolean;
  label: string;
}

export default function Button({ primary, label }: Props) {
  if (primary) {
  return <div className="button primary-button">{label}</div>;
  } else {
    return <div className="button secondary-button">{label}</div>;
  }
}
