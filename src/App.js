// import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ContactMe from "./pages/ContactMe";
import home from "./pages/home";
import "./assets/css/canvas.css";
function App() {
  return (
    <div id="root">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" component={home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/About" component={About} />
            <Route excat path="/ContactMe" component={ContactMe} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
