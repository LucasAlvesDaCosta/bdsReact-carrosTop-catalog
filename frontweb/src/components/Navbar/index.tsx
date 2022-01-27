import './styles.css';
import 'bootstrap/js/src/collapse.js';
///import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-color-custom main-nav">
      <div className="container-fluid">
        <a href="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/products">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;