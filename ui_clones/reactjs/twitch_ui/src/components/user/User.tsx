import React from "react";
import { User as UserModel } from "../../models/user";

import "./User.css";

interface Props {
    user: UserModel;
}

export default function User({user}: Props) {
  return (
    <div className="user">
      <img alt="Bunny" src={user.image} className="profile-picture" /><span className="username">{user.username}</span>
      <span className="description">{user.description}</span>
      <span className="watchers"><span className="dot" role="img" aria-label="Amount of people watching">🔴</span>{user.watchers}</span>
    </div>
  );
}
