import Button from "./components/button";
import "./style/home.css";
import ContentCarousel from "./components/contentCarosel";
import { redirect, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const checkLoginState = (): boolean => {
    const uData = JSON.parse(localStorage.getItem("uData")!);

  console.log('call');
  
    if (uData.state == true) {
      return true;
    }

    return false;
  };

  return (
    <>
      <div className="g_container">
        {/* Header */}
        <div className="site_header">
          <h1>Deondre's Corner</h1>
          {checkLoginState() ? (
            <Button
              innerText="Log out"
              reaction={(e) => {
                e.preventDefault();
                redirect("/");
              }}
            />
          ) : (
            <Button
              innerText="Login"
              reaction={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            />
          )}
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
