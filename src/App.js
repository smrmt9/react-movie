import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Main from "./routes/Main";
import Books from "./routes/Books";

function App() {
  return(
      <Router>
          <Switch>
              <Route exact path="/">
                  <Main/>
              </Route>
              <Route path="/movies">
                <Home/>
              </Route>
              <Route path="/movie/:id">
                  <Detail/>
              </Route>
              <Route path="/books">
                <Books/>
              </Route>
              <Route path="/book/:id">
                  <Detail/>
              </Route>

          </Switch>
      </Router>
  )
}

export default App;
// Router
// 1. BrowserRouter