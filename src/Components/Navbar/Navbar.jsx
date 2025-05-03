import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logoImg from "../../Assets/images/freshcart-logo.svg";
function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logoImg} alt="frech Cart" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Brands">
                  Brands
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fab fa-tiktok"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
