import { Link } from "react-router-dom";
import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <div className="site_header">
      <Link to="/">Deondre's Corner</Link>
      <Nav />
    </div>
  );
};

export default Header;
