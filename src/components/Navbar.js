import { CartWidget } from './CartWidget';

export const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  my-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Terapi-Toys
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};