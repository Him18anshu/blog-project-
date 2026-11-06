import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Blog<span>Space.</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/create" className="create-btn">
          + Write Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;