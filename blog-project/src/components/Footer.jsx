import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>BlogSpace.</h2>

      <p>
        Share your thoughts, stories and ideas with the world.
      </p>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Write Blog</Link>
      </div>

      <p className="copyright">
        © 2026 BlogSpace. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;