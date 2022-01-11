import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import UseLayoutEffect from './components/UseLayoutEffect'
import UseEffect from "./components/UseEffect"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/useLayoutEffect">
          <UseLayoutEffect />
        </Route>
        <Route exact path="/useEffect">
          <UseEffect />
        </Route>

        <Redirect to='/useLayoutEffect' />

      </Switch>
    </Router>
  );
}

export default App;
