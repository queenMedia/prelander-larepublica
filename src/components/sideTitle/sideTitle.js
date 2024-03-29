import "./sideTitle.css";
import { handleRoute } from "../../config";
export const SideTitle = (props) => {
  return (
    <>
      <div
        className="sideTitle-with-text"
        onClick={() => handleRoute("sideTitle")}
      >
        <div>{props.txt}</div>
        <span></span>
      </div>
    </>
  );
};
