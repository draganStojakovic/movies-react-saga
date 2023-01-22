import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/movies"> Movies </Link>
        <hr />
      </nav>
    </header>
  );
};
