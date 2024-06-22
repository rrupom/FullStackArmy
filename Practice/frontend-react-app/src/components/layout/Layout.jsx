import { Link } from "@reach/router";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link to="/" className={classes.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.navItem}>
                About
              </Link>
            </li>
            <li>
              <Link to="/help" className={classes.navItem}>
                Help
              </Link>
            </li>
            <li>
              <Link to="/clock" className={classes.navItem}>
                Clock
              </Link>
            </li>
            <li>
              <Link to="/tasks" className={classes.navItem}>
                Tasks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;

/**
 * When should we decide creating a new component ?
 * 1. When we need to write duplicate code
 * 2. Where only data is different
 */

/**
 * When you see any duplicate structure just make it a component
 */

/**
 * Component
 * Container
 */
