import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Accuei</Link>
              </li>
              <li>
                <Link to={`/eleves`}>Eleves</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }