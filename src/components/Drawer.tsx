import { useState } from "react";
import { Navigation } from "./Navigation";
const menu: string = require("../assets/icons/menu.svg").default;
const close: string = require("../assets/icons/close.svg").default;

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
      const root = document.getElementById("root");
      root?.classList.remove("fixed-body");
      setOpen(false);
      // eslint-disable-next-line no-self-assign
      window.location.href = window.location.href;
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
          <Navigation onClick={closeDrawer} />
        </div>
      ) : null}
    </div>
  );
};
