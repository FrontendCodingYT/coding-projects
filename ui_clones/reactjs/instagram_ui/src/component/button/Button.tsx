import React from "react";

import "./Button.css";

interface Props {
  label: string;
  primary?: boolean;
}
export default function Button({ label, primary }: Props) {
  if (primary) {
    return <div className="button primary-button hoverable">{label}</div>;
  } else {
    return <div className="button secondary-button hoverable">{label}</div>;
  }
}
