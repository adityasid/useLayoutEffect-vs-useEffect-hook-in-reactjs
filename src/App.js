import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import UseLayoutEffect from './components/UseLayoutEffect'
import UseEffect from "./components/UseEffect"

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/useLayoutEffect">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/useLayoutEffect">
            <UseLayoutEffect />
          </Route>
          <Route exact path="/useEffect">
            <UseEffect />
          </Route>

          <Redirect to='/useLayoutEffect' />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
