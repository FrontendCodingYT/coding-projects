import React, { useState, useEffect } from "react";

import "./Landing.css";
import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import { Post } from "../../models/post/Post";
import Modal from "../modal/Modal";

import posts from "../../data/posts/posts.json";
import stories from "../../data/stories/stories.json";

import Story from "../story/Story";

export default function Landing() {
  const [searchValue, setSearchValue] = useState("");
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    setAllPosts([...allPosts, ...posts]);
    setFilteredPosts([...filteredPosts, ...posts]);
  }, []);

  function openStories() {
    setStoriesOpen(true);
  }

  function closeStory() {
    setStoriesOpen(false);
  }

  function selectPost(post: Post) {
    setSelectedPost(post);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  function onSearchValueChange(newValue: string) {
    setSearchValue(newValue);

    let filteredPosts = allPosts.filter((p) => p.description.toUpperCase().includes(newValue.toUpperCase()));

    setFilteredPosts([...filteredPosts]);
  }

  return (
    <div>
      <Navbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
      <Content openStories={openStories} posts={filteredPosts} selectPost={selectPost} />
      {modalOpen && <Modal post={selectedPost} onClose={closeModal} />}
      {storiesOpen && <Story stories={stories} onClose={closeStory} />}
    </div>
  );
}
