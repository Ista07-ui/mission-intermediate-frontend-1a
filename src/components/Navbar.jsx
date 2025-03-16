import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar-container">
        <Link to="/">
          <img className="logo" src="/images/logo.png" alt="Logo" />
        </Link>

        <div className="navigation-bar-links">
          <div className="dropdown">
            <button className="dropbtn">Kategori</button>
            <div className="dropdown-content">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>

          <img src="icons/Avatar.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
