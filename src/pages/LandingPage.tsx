const arrow: string = require("../assets/down.svg").default;

export const LandingPage = () => {
  return (
    <div>
      <div className="header-hero">
        <div className="header-text">
          <h1>
            Welcome to the wonderful world of <span> perfumes</span>
          </h1>
        </div>
        <img className="down-arrow" src={arrow} alt="arrow"></img>
      </div>
      <div className="lp-content">
        <section>
          <h1 className="section-title"> About</h1>
          <p>
            <a href="https://www.fragrantica.com/"> Fragrantica </a> is an
            online encyclopedia of perfumes. It is created by true perfume
            lovers for all enthusiasts of exploring the fragrant world. The
            portal allows you to explore the portfolios of many brands in the
            perfume industry. Each fragrance contains a list of the
            composition's ingredients - divided by fragrance notes. Perfumes are
            also classified by olfactor groups. Therefore allows users to expand
            their knowledge and compare products with each other.
          </p>
        </section>
        <section>
          <h1 className="section-title">Explore</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit
          </p>
        </section>
        <section>
          <h1 className="section-title">Sources</h1>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise
          </p>
        </section>
      </div>
    </div>
  );
};
