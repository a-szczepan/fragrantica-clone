import { useState } from "react";
import { Navigation } from "./Navigation";
const menu: string = require("../assets/menu.svg").default;
const close: string = require("../assets/close.svg").default;

export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openDrawer = () => {
    const root = document.getElementById("root");
    root?.classList.add("fixed-body");
    setOpen(true);
  };

  const closeDrawer = () => {
    const drawer = document?.getElementById("drawer");
    if (drawer) drawer.style.animation = "drawer-close 2s forwards";
    setTimeout(() => {
      setOpen(false);
      const root = document.getElementById("root");
      root?.classList.remove("fixed-body");
    }, 1800);
  };

  return (
    <div>
      <button onClick={openDrawer}>
        <img className="burger-menu" src={menu} alt="menu"></img>
      </button>
      {open ? (
        <div className="drawer" id="drawer">
          <button onClick={closeDrawer} id="close-drawer-btn">
            <img className="close-btn" src={close} alt="menu"></img>
          </button>
          <Navigation />
        </div>
      ) : null}
    </div>
  );
};
