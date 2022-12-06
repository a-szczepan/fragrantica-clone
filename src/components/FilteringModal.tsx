import ReactDom from "react-dom";
import { Filters } from "./Filters";
const close: string = require("../assets/icons/close.svg").default;
type Props = {
  open: boolean;
  onClose: () => void;
};

export const FilteringModal = ({ open, onClose }: Props) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="modal-wrapper">
      <div className="modal">
        <form>
          <div className="modal-header-wrapper">
            <h2>Filters</h2>
            <button onClick={onClose}>
              <img className="close-btn" src={close} alt="menu"></img>
            </button>
          </div>
          <hr className="divider"></hr>
          <Filters />
        </form>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
