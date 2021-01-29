import React from "react";

import "./SidebarButton.css";

interface Props {
  icon: any;
  label: string;
}
export default function SidebarButton({ icon, label }: Props) {
  return (
    <button className="sidebar-button" title={label}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
