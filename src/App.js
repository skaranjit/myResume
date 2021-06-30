// import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Home from "./pages/home";
function App() {
  return (
    <div id="root">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route excat path="/Contact" component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
