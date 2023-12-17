import "./navbar.css";
import "./footer.css";
import { Link } from "react-router-dom";
import Globalcontext from "../store/globalContext";
import { useContext } from "react";

function Navbar() {

  const user = useContext(Globalcontext).user;
  const cart = useContext(Globalcontext).cart;

  function getNumOfProducts() {
    let total = 0;
    for(let i=0; i<cart.length; i++) {
      total += cart [i].quantity;
    }
    return total;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">

          <button type="button">{user.name}</button>

          <Link to="/cart" className="btn btn-cart-underline">
            {getNumOfProducts()}
          <i className="bi bi-cart-fill me-2" />
          Cart
        </Link>
</form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


