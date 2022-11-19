export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <hr className="divider"></hr>
        <li>
          <a href="#">About</a>
        </li>
        <hr className="divider"></hr>
        <li>
          <a href="#">Sources</a>
        </li>
        <hr className="divider"></hr>
      </ul>
      <a className="browse-btn drawer-browse-btn">
        <button>Browse</button>
      </a>
    </nav>
  );
};
