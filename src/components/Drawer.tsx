import { useScrollPrevention } from "../hooks/useScrollPrevention";
import { Navigation } from "./Navigation";
const menu: string = require("../assets/icons/menu.svg").default;
const close: string = require("../assets/icons/close.svg").default;

export const Drawer = () => {
  const [scrollPrevention, setScrollPrevention] = useScrollPrevention(false);

  const openDrawer = () => {
    setScrollPrevention(true);
  };

  const closeDrawer = () => {
    const drawer = document?.getElementById("drawer");
    if (drawer) drawer.style.animation = "drawer-close 2s forwards";
    setTimeout(() => {
      setScrollPrevention(false);
      // eslint-disable-next-line no-self-assign
      window.location.href = window.location.href;
    }, 1800);
  };

  return (
    <div>
      <button onClick={openDrawer}>
        <img className="burger-menu" src={menu} alt="menu"></img>
      </button>
      {scrollPrevention ? (
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
