import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import BookTreatment from "./pages/BookTreatment";
import TreatmentCategory from "./pages/TreatmentCategory";
import BookNew from './components/BookNew';
import Admin from './pages/Admin'
import Register from './pages/Register';

function App() {
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
          <Route path='/boka2' component={BookNew} /> {/* In development. Meant to replace other booking component but with dynamic time/date pick*/}
          <Route path='/admin' component={Admin} />
          <Route path='/registrering' component={Register} />
        </Switch>
      </>
    </Router>
  )
}

export default App