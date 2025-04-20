import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const navigation = useNavigate();
  const ReadData = () => {
    const nama = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const nohp = localStorage.getItem("nohp");

    console.log({
      nama,
      email,
      nohp,
    });

    return {
      nama: nama,
      email: email,
      nohp: nohp,
    };
  };

  const handleLogout = () => {
    localStorage.clear();

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
            <p>{ReadData().nama}</p>
            <button className="dropbtn">Kategori</button>
            <div className="dropdown-content">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/">Home</Link>
              <a href="/" onClick={handleLogout}>
                <span>Logout</span>
              </a>
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
