import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/Header/HeaderNav";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <HeaderNav></HeaderNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route>
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
