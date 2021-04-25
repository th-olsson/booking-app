import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import BookTreatment from "./pages/BookTreatment";
import TreatmentCategory from "./pages/TreatmentCategory";

function AppRoute() {
    const [myBookingsList, setMyBookingsList] = useState([]);

    function getBookingData(newObject) {
        const formerBookingsList = myBookingsList;
        const newBookingsList = [...formerBookingsList, newObject];

        setMyBookingsList(newBookingsList)
    }

    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/behandling/:id' component={TreatmentCategory} />
                    <Route path='/bokningar'><Bookings bookingsList={myBookingsList} /></Route>
                    <Route path='/inloggning' component={Login} />
                    <Route path='/boka/:id'><BookTreatment getBookingData={getBookingData} /></Route>
                </Switch>
            </>
        </Router>
    )
}

export default AppRoute
