import React from "react";

import "./Content.css";
import TrendingToday from "./trending-today/TrendingToday";

export default function Content() {
  return (
    <div className="content">
      <TrendingToday />
    </div>
  );
}
