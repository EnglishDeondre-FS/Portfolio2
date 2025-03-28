import Button from "./components/button";
import "./style/home.css";
import ContentCarousel from "./components/contentCarosel";
import Nav from "./components/nav";
import Header from "./components/header";

function App() {

  return (
    <>
      <div className="g_container">
        <Header /> 
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
        </div>
        <div className="c_container">
          <ContentCarousel />
        </div>
      </div>
    </>
  );
}

export default App;
