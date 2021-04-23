import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Hair from "./pages/Hair";
import Beauty from "./pages/Beauty";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";

function AppRoute() {
    return (
        <Router>
            <>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/hair' component={Hair} />
                <Route path='/beauty' component={Beauty} />
                <Route path='/bookings' component={Bookings} />
                <Route path='/login' component={Login} />
            </Switch>
            </>
        </Router>
    )
}

export default AppRoute
