import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import BookTreatment from "./pages/BookTreatment";
import TreatmentCategory from "./pages/TreatmentCategory";
import TimeConversion from './components/TimeConversion';
import BookTest from './components/BookTest';
import Admin from './pages/Admin'
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/behandling/:id' component={TreatmentCategory} />
          <Route path='/bokningar' component={Bookings} />
          <Route path='/inloggning' component={Login} />
          <Route path='/boka/:id' component={BookTreatment} />
          <Route path='/boka2' component={BookTest} /> {/* In development. Meant to replace other booking component but with dynamic time/date pick*/}
          <Route path='/admin' component={Admin} />
          <Route path='/registrering' component={Register} />
        </Switch>
      </>
    </Router>
  )
}

export default App