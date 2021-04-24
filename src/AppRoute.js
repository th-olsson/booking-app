import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Book from "./components/Book";
// import Treatments from "./components/Treatments";
import TreatmentCategory from "./pages/TreatmentCategory";

function AppRoute() {
    return (
        <Router>
            <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/category/:id' component={TreatmentCategory} />
                <Route path='/bookings' component={Bookings} />
                <Route path='/login' component={Login} />
                <Route path='/book/:id' component={Book} />
            </Switch>
            </>
        </Router>
    )
}

export default AppRoute
