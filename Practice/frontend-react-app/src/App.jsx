import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import ClockPage from "./pages/ClockPage";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
      <ClockPage path="/clock" />
      <Tasks path="/tasks" />
    </Router>
  );
}

export default App;

/**
 * When should we decide creating a new component ?
 * * When we need to write duplicate code
 * * Which data are different
 */

/**
 * Component
 * Container **
 */

/**
 * Designing Component
 * - Props
 * - Component Tree
 * - State
 */

/**
 * When a component rerender
 * - When Props Change
 * - When State Change
 * - When Parent Rerender
 */
