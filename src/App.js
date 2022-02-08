import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am a chat page</h1>
          </Route>

          <Route path="/">
            // default route should always in bottom
            <h1>I am a home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
