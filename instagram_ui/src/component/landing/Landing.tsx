import React, { useState } from "react";

import "./Landing.css";
import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import { Post } from "../../models/post/Post";
import Modal from "../modal/Modal";

export default function Landing() {
  const [searchValue, setSearchValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  function selectPost(post: Post) {
    setSelectedPost(post);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function onSearchValueChange(newValue: string) {
    setSearchValue(newValue);
  }

  return (
    <div>
      <Navbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
      <Content selectPost={selectPost} />
      {modalOpen && <Modal post={selectedPost} onClose={closeModal} />}
    </div>
  );
}
