// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ContactMe from "./pages/ContactMe";
import home from "./pages/home";
import "./assets/css/canvas.css";
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path={"/"} component={home}></Route>
            <Route path="/Profile" component={Profile}></Route>
            <Route path="/About" component={About}></Route>
            <Route path={"/ContactMe"} component={ContactMe}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
