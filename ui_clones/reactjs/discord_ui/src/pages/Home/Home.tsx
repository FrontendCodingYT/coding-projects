import "./Home.css";
//Tsx
//Remove the element from the dom tree

//Css
//Display: none, so the element is not visible anymore but still in the dom tree

//Discord button
//Divider
//Other buttons -> Component

import discordLogo from "../../images/Discord logo.png";
import IconButton from "../../components/IconButton/IconButton";
import AddIcon from "../../icons/AddIcon";
import ExploreIcon from "../../icons/ExploreIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import Tooltip from "../../components/Tooltip/Tooltip";

export default function Home() {
  return (
    <div className="home-page">
      <nav>
        <div className="discord-button"> {/* Container */}
          <div className="indicator"></div>
          <button>
            <img alt="discord-logo" src={discordLogo} /> {/* Button */}
            <span className="tooltip">Direct Messages</span> {/* Span */}
          </button>
        </div>
        <div className="divider"></div>
        <Tooltip title="Add a Server">
          <IconButton iconColor="secondary" icon={<AddIcon />} />
        </Tooltip>
        <div className="divider"></div>
        <Tooltip title="Download Apps">
          <IconButton iconColor="secondary" icon={<DownloadIcon />} />
        </Tooltip>

        <Tooltip title="Discover">
          <IconButton icon={<ExploreIcon />} />
        </Tooltip>
      </nav>

      <div className="top-left">
        <button className="find-conversation">Find or start a conversation</button>
      </div>
      <div className="top-main">Top main</div>
      <div className="top-right">Top right</div>
      <div className="main-left">Main left row</div>
      <div className="main">Main row</div>
      <div className="main-right">Main right row</div>
      <div className="bottom-left">Bottom left row</div>
      <div className="bottom-main">Bottom row</div>
      <div className="bottom-right">Bottom right row</div>
    </div>
  );
}
