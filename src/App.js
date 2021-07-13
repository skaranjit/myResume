// import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ContactForm from "./pages/Contact";
import Home from "./pages/home";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div id="root">
      <Layout />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={ContactForm} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
