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
              <Route path="/react-movie/movies">
                <Home/>
              </Route>
              <Route path="/react-movie/movie/:id">
                  <Detail/>
              </Route>
              <Route path="/react-movie/books">
                <Books/>
              </Route>
              <Route path="/react-movie/book/:id">
                  <Detail/>
              </Route>
              <Route path="/react-movie">
                  <Main/>
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
// Router
// 1. BrowserRouter