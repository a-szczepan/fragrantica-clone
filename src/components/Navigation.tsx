export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="/">About</a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="/">Sources</a>
        </li>
        <li className="divider"> </li>
      </ul>
      <a className="browse-btn drawer-browse-btn" href="/search">
        <button>Browse</button>
      </a>
    </nav>
  );
};
