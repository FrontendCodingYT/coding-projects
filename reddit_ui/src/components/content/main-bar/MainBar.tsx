import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import Whatshot from "@material-ui/icons/Whatshot";
import NewReleases from "@material-ui/icons/NewReleases";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Menu from "@material-ui/icons/Menu";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import "./MainBar.css";
import Posts from "../posts/Posts";

export default function MainBar() {
  return (
    <div className="main-bar">
      <div className="update-card">
        <div className="top-section">
          <span>UPDATES FROM REDDIT</span>
          <CloseIcon className="hoverable" />
        </div>
        <div className="body hoverable">
          <div className="context">
            <span className="title">Keep yourself safe and informed</span>
            <br />
            <span className="description">Visit r/Coronavirus to talk about COVID-19, and visit www.who.int for more information.</span>
          </div>
          <img src="/assets/images/pin.jpg" />
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-element hoverable">
          <Whatshot />
          <span>Hot</span>
        </div>
        <div className="filter-element hoverable">
          <span>Everywhere</span>
          <ArrowDropDown />
        </div>
        <div className="filter-element-secondary hoverable">
          <NewReleases />
          <span>New</span>
        </div>
        <div className="filter-element-secondary hoverable">
          <TrendingUp />
          <span>Top</span>
        </div>
        <MoreHoriz className="filter-element-tertiary hoverable" />
        <div className="spacer"></div>
        <div className="filter-element-menu hoverable">
          <Menu />
          <ArrowDropDown />
        </div>
      </div>

      <Posts />
    </div>
  );
}
