const icon: string = require("../assets/down.svg").default;

export const LandingPage = () => {
  return (
    <div>
      <div className="header-hero">
        <div className="header-text">
          <h1>
            Welcome to the wonderful world of <span> perfumes</span>
          </h1>
        </div>
        <img className="down-arrow" src={icon} alt="arrow"></img>
      </div>
      <div className="about">
        <h1 className="section-title"> About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="explore">
        <h1 className="section-title">Explore</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit
        </p>
      </div>
      <div className="sources">
        <h1 className="section-title">Sources</h1>
        <p>
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. To take a trivial example, which of us ever undertakes
          laborious physical exercise
        </p>
      </div>
    </div>
  );
};
