import React from "react";

import "./Button.css";

interface Props {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export default function Button({ label, primary, secondary, tertiary }: Props) {
  if (tertiary) {
    return <button className="button tertiary-button">{label}</button>;
  } else if (secondary) {
    return <button className="button secondary-button">{label}</button>;
  } else {
    return <button className="button primary-button">{label}</button>;
  }
}
