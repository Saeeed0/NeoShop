import style from "./NotFound.module.css";
import notFoundImg from "../../Assets/images/error.svg";
function NotFound() {
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center">
      <img className="w-100" src={notFoundImg} alt="not found img" />
      </div>
    </>
  );
}

export default NotFound;
