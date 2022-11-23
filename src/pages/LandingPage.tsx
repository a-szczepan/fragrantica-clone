import photoA from "../assets/images/perfume-bottle.jpg";
import photoB from "../assets/images/perfume-bottle-2.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const arrow: string = require("../assets/icons/down.svg").default;
const perfume: string = require("../assets/icons/perfume.svg").default;

export const LandingPage = () => {
  return (
    <div>
      <div className="header-hero">
        <div className="header-text">
          <h1>
            Welcome to the wonderful world of <span> perfumes</span>
          </h1>
        </div>
        <a className="down-arrow" href="#about">
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
      <div className="lp-content">
        <section className="about-section" id="about">
          <div className="section-containter">
            <h1 className="section-title"> ABOUT</h1>
            <p>
              Fragrantica is an online encyclopedia of perfumes. It is created
              by true perfume lovers for all enthusiasts of exploring the
              fragrant world. The portal allows you to explore the portfolios of
              many brands in the perfume industry. Each fragrance contains a
              list of the composition's ingredients - divided by fragrance
              notes. Perfumes are also classified by olfactor groups. Therefore
              allows users to expand their knowledge and compare products with
              each other.
            </p>
          </div>
          <img src={photoA} alt="perfume bottle"></img>
        </section>
        <section className="explore-section" id="explore">
          <div className="section-containter">
            <h1 className="section-title">EXPLORE</h1>
            <ul>
              <li>
                <div className="explore-info">
                  <img id="perfume-icon" src={perfume} alt="perfume"></img>
                  <CountUp
                    start={10000}
                    end={70000}
                    separator=" "
                    duration={1.5}
                    prefix="+"
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span>perfumes in the database</span>
                </div>
              </li>
              <li>
                <span>Browse the scents of the most popular brands</span>
              </li>
              <li>
                <span>Discover individual niche fragrances</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="sources-section" id="sources">
          <img src={photoB} alt="perfume bottle"></img>
          <div className="section-containter">
            <h1 className="section-title">SOURCES</h1>
            <p>
              The following list contains the sources of the content used in
              this project. If you click on an item, you will be redirected.
            </p>
            <ul className="list-of-sources">
              <li>
                <a href="https://www.fragrantica.com/">
                  Information about perfumes <span>Fragrantica</span>
                </a>
              </li>
              <li className="divider"> </li>
              <li>
                <a href="https://burst.shopify.com/photos/dramatic-black-glass-perfume?q=perfume">
                  Header image <span>Sarah Pflug</span>
                </a>
              </li>
              <li className="divider"> </li>
              <li>
                <a href="https://www.pexels.com/pl-pl/zdjecie/martwa-natura-pojemnik-perfumy-szklana-butelka-10688062/">
                  Black perfume bottle image <span>Abdulrhman Alkady</span>
                </a>
              </li>
              <li className="divider"> </li>
              <li>
                <a href="https://www.pexels.com/pl-pl/zdjecie/platforma-martwa-natura-jedwabisty-fotografia-produktowa-12402363/">
                  Two bottles of perfume image <span>Marek Mucha</span>
                </a>
              </li>
              <li className="divider"> </li>
              <li>
                <a href="https://www.svgrepo.com/">
                  Icons <span>SVG REPO</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
