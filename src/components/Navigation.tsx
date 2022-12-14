type Props = {
  onClick: () => void;
};

export const Navigation = ({ onClick }: Props) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="#about" onClick={onClick}>
            About
          </a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="#sources" onClick={onClick}>
            Sources
          </a>
        </li>
        <li className="divider"> </li>
      </ul>
      <a className="browse-btn drawer-browse-btn" href="/search?page=1">
        <button>Browse</button>
      </a>
    </nav>
  );
};
