import { useMobileChecker } from "../hooks/useMobileChecker";
import { Drawer } from "./Drawer";
import { Navigation } from "./Navigation";

export const Header = () => {
  const isMobile = useMobileChecker();

  return (
    <header className="header">
      <a className="logo" href="#">
        {" "}
        Fragrance{" "}
      </a>
      {isMobile ? <Drawer /> : <Navigation />}
    </header>
  );
};
