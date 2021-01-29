import React from "react";

import "./Profiles.css";

import profiles from "../../data/profiles/profiles.json";

import Button from "../../components/button/Button";

interface Props {
  onProfileClick: Function;
}

export default function Profiles({ onProfileClick }: Props) {
  return (
    <div className="profiles-container">
      <span className="title">Who's watching?</span>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div key={index} onClick={(e) => onProfileClick(profile)} className="profile">
            <img className="image" src={profile.image_src} />
            <span className="username">{profile.username}</span>
          </div>
        ))}
      </div>
      <Button ghost secondary label="MANAGE PROFILES" />
    </div>
  );
}
