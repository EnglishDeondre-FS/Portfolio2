import Button from "./components/button";
import "./style/home.css";
import ContentCarousel from "./components/contentCarosel";
import { redirect } from "react-router-dom";

function App() {

  return (
    <>
      <div className="g_container">
        {/* Header */}
        <div className="site_header">
          <h1>Deondre's Corner</h1>
        </div>
        <div className="site_description">
          <h2>Welcome</h2>
          <span>
            This is a place for me to share all the things I've learned over
            time. Sharing context on things like networks, rendering,
            programming languages, computer science and more to come! I don't
            just wan't to dump information on you I want this to be a learning
            process so the aim is to teach as we go through the content.
            Allowing for the both of use to learn!
          </span>
          <h1>
            Are you ready ?
            <br />
            <Button
              link="/blog/rendering"
              reaction={(e) => {
                e.preventDefault();
              }}
              innerText="Continue >>>"
            />
          </h1>
        </div>
        <div className="c_container">
          <ContentCarousel />
        </div>
      </div>
    </>
  );
}

export default App;
