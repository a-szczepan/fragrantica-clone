const github: string = require("../assets/icons/github.svg").default;

export const Footer = () => {
  return (
    <footer className="footer">
      <span>Source code available on GitHub </span>
      <a href="https://github.com/a-szczepan/fragrantica-clone">
        <img src={github} alt="github logo"></img>
      </a>
    </footer>
  );
};
