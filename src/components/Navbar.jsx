import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const navigation = useNavigate();
  const ReadData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return { name: "", email: "", nohp: "" };

    const { name, email, nohp } = JSON.parse(loggedInUser);
    console.log({
      name,
      email,
      nohp,
    });

    return {
      name: name,
      email: email,
      nohp: nohp,
    };
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    navigation("/");
  };

  return (
    <nav className="navigation-bar">
      <div className="navigation-bar-container">
        <Link to="/">
          <img className="logo" src="/images/logo.png" alt="Logo" />
        </Link>

        <div className="navigation-bar-links">
          <div className="dropdown">
            <p>{ReadData().name}</p>
            <button className="dropbtn">Kategori</button>
            <div className="dropdown-content">
              {ReadData().name ? (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/admin">Admin</Link>
                  <Link to="/profile">Profile</Link>
                  <a href="/" onClick={handleLogout}>
                    <span>Logout</span>
                  </a>
                </>
              ) : (
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </div>

          <Link to="/profile">
            <img src="icons/Avatar.png" alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
