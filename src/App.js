import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/Header/HeaderNav";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
