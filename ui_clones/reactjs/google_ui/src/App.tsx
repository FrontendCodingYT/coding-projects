import { MdApps } from "react-icons/md"
import { MdSearch } from "react-icons/md"
import { MdPhotoCamera } from "react-icons/md"
import "./App.css"

function App() {

  return (
    <div className="background-container">
      <div className="navigation-container">
        <a className="hover">Gmail</a>
        <a className="hover">Images</a>
        <MdApps />
        <button className="hover">Sign in</button>
      </div>
      <div className="search-container">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" />
        <div className="searchbar">
          <MdSearch />
          <input type="text" />
          <MdPhotoCamera />
        </div>
        <div className="button-container">
          <button className="hover">Google Search</button>
          <button className="hover">I'm Feeling Lucky</button>
        </div>
        <span>Google offered in: <a className="hover">Nederlands</a><a className="hover">Frysk</a></span>
      </div>
      <div className="spacer"></div>
      <footer>
        <div className="layer">
          <span>Netherlands</span>
        </div>
        <div className="layer">
          <div>
            <a>About</a>
            <a>Advertising</a>
            <a>Business</a>
            <a>How Search works</a>
          </div>
          <div>
            <a>Privacy</a>
            <a>Terms</a>
            <a>Settings</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
