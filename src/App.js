import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Pages/Services/ServiceDetail";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/Header/HeaderNav";
import Products from "./Pages/Products/Products";
import Doctors from "./Pages/Doctors/Doctors";

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
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
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
