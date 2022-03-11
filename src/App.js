import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import history  from "./history"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment"

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  // will only runs ones when the app component loads

  auth.onAuthStateChanged(authUser =>{
    console.log('user is >>' , authUser);
    
    if(authUser){
      // the user just loggrd in / the user was logged in

dispatch({
  type: 'SET_USER',
  user: authUser
})
    }else{
      //user is logged out
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  })
}, [])


  return (
    <Router history={history}>
    <div className="app">
    <Header />
      <Routes>
        <Route exact path="/checkout" element={< Checkout />}>
        </Route>
        <Route exact path="/" element={ <Home/> }>
        </Route>
        <Route exact path="/login" element={< Login />}>
        </Route>
        <Route exact path="/payment" element={<Payment />}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
