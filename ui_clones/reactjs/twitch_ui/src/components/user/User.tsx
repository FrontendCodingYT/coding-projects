import React from "react";

import "./User.css";

interface Props {
    user: any;
}

export default function User({user}: Props) {
  return (
    <div className="user">
      <img src={user.image} className="profile-picture" /><span className="username">{user.username}</span>
      <span className="description">{user.description}</span>
      <span className="watchers"><span className="dot">🔴</span>{user.watchers}</span>
    </div>
  );
}
