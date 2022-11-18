export const Navbar = () => {
  return (
    <header className="header">
      <a className="logo" href="#">
        Fragrance
      </a>
      <nav className="navbar">
        <ul>
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">About</a>
          </li>
          <li>
            {" "}
            <a href="#">Sources</a>
          </li>
        </ul>
        <a className="browse-btn">
          <button>Browse</button>
        </a>
      </nav>
    </header>
  );
};
