import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Main from "./routes/Main"
import {} from "bootstrap";

function App() {
  return(
      <Router>
          <Switch>
              <Route path="/movie/:id">
                <Detail/>
              </Route>
              <Route path="/movies">
                <Home/>
              </Route>
              <Route path="/">
                  <Main/>
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
// Router
// 1. BrowserRouter