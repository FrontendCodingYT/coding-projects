import React, { useState } from "react";

import "./Landing.css";
import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import { Post } from "../../models/post/Post";

export default function Landing() {
  const [searchValue, setSearchValue] = useState("");

  function selectPost(post: Post) {
  }

  function onSearchValueChange(newValue: string) {
    setSearchValue(newValue);
  }

  return (
    <div>
      <Navbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
      <Content selectPost={selectPost} />
    </div>
  );
}
