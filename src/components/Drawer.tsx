import { useState } from "react";
import { Navigation } from "./Navigation";
const menu: string = require("../assets/menu.svg").default;

export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleDrawer}>
        <img className="burger-menu" src={menu} alt="menu"></img>
      </button>
      {open ? (
        <div className="drawer">
          <Navigation />
        </div>
      ) : null}
    </div>
  );
};
