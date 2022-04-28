import { CartFill } from "react-bootstrap-icons";
import "bootstrap/js/dist/dropdown";
import "./Navbar.css";
import { Nav, NavDropdown } from "react-bootstrap";

// Receiving the props from App to display the cart count
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!" style={{ fontSize: "20px" }}>
            Start Bootstrap
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Shop"
                    menuVariant="light"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      All Products
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Popular Items
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      New Arrivals
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </li>
            </ul>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button
                className="btn btn-secondary bg-dark btn-outline-dark"
                type="submit"
              >
                <CartFill className="text-white" />
                <span className="text-white bg-dark mx-2">Cart</span>
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {props.cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
