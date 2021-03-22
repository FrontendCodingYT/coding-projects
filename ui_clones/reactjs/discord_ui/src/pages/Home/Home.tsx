import "./Home.css";

//Breaking point is 1200px
//Larger than 1200px display right
//Else don't display right

//Tsx
//Remove the element from the dom tree

//Css
//Display: none, so the element is not visible anymore but still in the dom tree

export default function Home() {
    return <div className="home-page">
        <nav>Navigation</nav>
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
}