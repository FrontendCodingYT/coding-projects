import React from "react";

import "./Sidebar.css";

import HomeIcon from "@material-ui/icons/Home";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import SidebarButton from "../sidebarButton/SidebarButton";
import SignInButton from "../signInButton/SignInButton";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TheatersIcon from "@material-ui/icons/Theaters";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";

import AddIcon from "@material-ui/icons/Add";

import YouTubeIcon from "@material-ui/icons/YouTube";

import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarButton icon={<HomeIcon />} label="Home" />
      <SidebarButton icon={<WhatsHotIcon />} label="Trending" />
      <SidebarButton icon={<SubscriptionsIcon />} label="Subscriptions" />
      <div className="divider"></div>
      <SidebarButton icon={<VideoLibraryIcon />} label="Library" />
      <SidebarButton icon={<HistoryIcon />} label="History" />
      <div className="divider"></div>
      <div className="sign-in">
        <span>Sign in to like videos, comment, and subscribe.</span>
        <SignInButton />
      </div>
      <div className="divider"></div>
      <h2 className="sidebar-section-title">BEST OF YOUTUBE</h2>
      <SidebarButton icon={<MusicNoteIcon />} label="Music" />
      <SidebarButton icon={<SportsSoccerIcon />} label="Sports" />
      <SidebarButton icon={<SportsEsportsIcon />} label="Gaming" />
      <SidebarButton icon={<TheatersIcon />} label="Movies" />
      <SidebarButton icon={<ReceiptIcon />} label="News" />
      <SidebarButton icon={<LiveTvIcon />} label="Live" />
      <SidebarButton icon={<ThreeDRotationIcon />} label="360° Video" />
      <div className="divider"></div>
      <SidebarButton icon={<AddIcon />} label="Browse channels" />
      <div className="divider"></div>
      <h2 className="sidebar-section-title">MORE FROM YOUTUBE</h2>
      <SidebarButton icon={<YouTubeIcon />} label="YouTube Premium" />
      <SidebarButton icon={<LiveTvIcon />} label="Live" />
      <div className="divider"></div>
      <SidebarButton icon={<SettingsIcon />} label="Settings" />
      <SidebarButton icon={<FlagIcon />} label="Report history" />
      <SidebarButton icon={<HelpIcon />} label="Help" />
      <SidebarButton icon={<FeedbackIcon />} label="Send feedback" />
      <div className="divider"></div>
      <div className="link-block">
        <a>About</a>
        <a>Press</a>
        <a>Copyright</a>
        <a>Contact us</a>
        <a>Creators</a>
        <a>Advertise</a>
        <a>Developers</a>
      </div>
      <div className="link-block">
        <a>Terms</a>
        <a>PrivacyPolicy & Safety</a>
        <a>Test new features</a>
      </div>
      <p className="copyright">© 2020 Google LLC YouTube, a Google company</p>
    </div>
  );
}
