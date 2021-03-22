import "./Home.css";
//Tsx
//Remove the element from the dom tree

//Css
//Display: none, so the element is not visible anymore but still in the dom tree

//Discord button
//Divider
//Other buttons -> Component

import discordLogo from "../../images/Discord logo.png";

export default function Home() {
  return (
    <div className="home-page">
      <nav>
        <div className="discord-button">
            <div className="indicator"></div>
          <button>
            <img alt="discord-logo" src={discordLogo} />
            <span className="tooltip">Home</span>
          </button>
        </div>
        <div>divider</div>
        <button>Server</button>
        <button>Public</button>
        <div>divider</div>
        <button>Download</button>
      </nav>
      <div className="unclaimed">Unclaimed account</div>
      <div className="top-left">Top left</div>
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
