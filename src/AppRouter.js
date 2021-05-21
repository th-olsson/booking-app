import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TreatmentCategory from "./pages/TreatmentCategory";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Admin from './pages/Admin'
import Register from './pages/Register';

function AppRouter() {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/behandling/:id' component={TreatmentCategory} />
                    <Route path='/bokningar' component={Bookings} />
                    <Route path='/inloggning' component={Login} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/registrering' component={Register} />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter