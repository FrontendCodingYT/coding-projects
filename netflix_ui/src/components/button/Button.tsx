import React from "react";

import "./Button.css";

interface Props {
  label: string;
}

export default function Button({ label }: Props) {
  return <button className="button-container">{label}</button>;
}
