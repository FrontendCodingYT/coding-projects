import React from "react";

import "./Landing.css";

import profiles from "../../data/profiles/profiles.json";
import Button from "../../components/button/Button";

export default function Landing() {
  return (
    <div className="landing-container">
      <img className="logo" src="assets/images/netflix.svg" />
      <div className="content">
        <span className="title">Who's watching?</span>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <div className="profile">
              <img className="image" src={profile.image_src} />
              <span className="username">{profile.username}</span>
            </div>
          ))}
        </div>
        <Button label="MANAGE PROFILES" />
      </div>
    </div>
  );
}
