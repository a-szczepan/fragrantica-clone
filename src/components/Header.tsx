import { useWidthChecker } from "../hooks/useWidthChecker";
import { Drawer } from "./Drawer";
import { Navigation } from "./Navigation";

export const Header = () => {
  const screenWidth = useWidthChecker();
  return (
    <header className="header">
      <a className="logo" href="/#">
        {" "}
        Fragrance{" "}
      </a>
      {screenWidth < 576 ? <Drawer /> : <Navigation onClick={() => {}} />}
    </header>
  );
};
