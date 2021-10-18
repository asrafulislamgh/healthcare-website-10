import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/Header/HeaderNav";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
