import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./components/Book";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Treatments from "./components/Treatments";
import Bookings from "./pages/Bookings";
import Hair from "./pages/Hair";
import Beauty from "./pages/Beauty";
import Home from "./pages/Home";
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
