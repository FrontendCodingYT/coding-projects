import React from "react";

import Close from "@material-ui/icons/Close";

import "./Modal.css";
import { Post } from "../../models/post/Post";
import Button from "../button/Button";
import MoreHoriz from "@material-ui/icons/MoreHoriz";

interface Props {
  post?: Post;
  onClose: Function;
}

export default function Modal({ onClose, post }: Props) {
  return (
    <div className="modal-container">
      <div onClick={() => onClose()} className="close-modal hoverable">
        <Close fontSize="large" />
      </div>
      <div className="modal">
        <img className="modal-image" src={post?.image_url} />
        <div className="modal-content-section">
          <div className="modal-top-section">
            <img className="hoverable" src={post?.profile_url} />
            <div className="modal-username hoverable">{post?.profile_name}</div>
            <Button label="Follow" />
            <div className="spacer"></div>
            <MoreHoriz className="hoverable" />
          </div>
          <div>Comment section</div>
          <div>Details section</div>
          <div>Write section</div>
        </div>
      </div>
    </div>
  );
}
