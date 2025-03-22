import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitCallback = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const dataSet = {
      email: email,
      password: password, 
    };

    const response = await fetch('http://localhost:1337/auth/signup', {
      method: 'POST',
      body: JSON.stringify(dataSet),
      headers: {
        "Content-Type": "application/json", 
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const tData = await response.json();

    localStorage.setItem("uData", JSON.stringify(tData));

    navigate("/");
  };

  return (
    <div className="l_page_container">
      <h1>Login</h1>
      <form className="l_page_form">
        <input type="text" placeholder="Username" onKeyDown={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onKeyDown={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={submitCallback}>
          Login
        </button>
        <button type="button">Forgot Password</button>
      </form>
    </div>
  );
};

export default LoginPage;
