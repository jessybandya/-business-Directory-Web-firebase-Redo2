import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Registerbusiness from './components/Registerbusiness';
import Registerclient from './components/Registerclient';
import Loginclient from './components/Loginclient';
import Myprofile from './components/Myprofile';
import Listbusiness from "./components/Allposts"
import Listclients from "./components/Listclients"
import {useHistory} from "react-router-dom"
import {auth} from "./components/firebase";
import Listbusinessdetails from "./components/Listbusinessdetails"
import Carhire from "./components/Carhire"
import Restaurant from "./components/Restaurants"
import Schools from "./components/Schools"
import Businessemail from "./components/Businessemail"
import Autorepairs from "./components/Autorepairs"
import Hospitals from "./components/Hospitals"
import Suggestedit from "./components/Suggestedit"
import Salon from "./components/Salon"
import Categories from "./components/Categories"
import Notifications from "./components/Notifications"
import Home1 from "./components/Home1"
import Blog from './components/Blog';
import Registerjob from './components/Registerjob';
import Allpostsjobs from './components/Allpostsjobs';


function App() {
  const history = useHistory("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        setUser(authUser)
      }else{
        setUser(false);
      }
    })
  }, [])
  return (
    <Router>
      <Switch>
      <Route exact path="/">
              <Home  user={user}/>
            </Route>
         <Route exact path="/contact-us" component={Contact}/>
         <Route exact path="/about-us" component={About}/>
         <Route exact path="/register-business">
              <Registerbusiness  user={user}/>
            </Route> 
            <Route exact path="/register-job/:uid">
              <Registerjob  user={user}/>
            </Route>
         <Route exact path="/register-client" component={Registerclient}/>
         <Route exact path="/login-client" component={Loginclient}/>
         <Route exact path="/list-businesses" component={Listbusiness}/>
         <Route exact path="/list-jobs" component={Allpostsjobs}/>

         <Route exact path="/list-clients" component={Listclients}/>
         <Route exact path="/news" component={Blog}/>

                 <Route exact path="/list-businesses-details/:name/:phone/:email/:ownerId/:businessName/:descriptions/:industry/:address/:location">
              <Listbusinessdetails  user={user}/>
            </Route> 
         <Route exact path="/businesses-email/:name/:phone/:email/:ownerId/:businessName/:category">
              <Businessemail  user={user}/>
            </Route> 

            <Route exact path="/myprofile/:uid">
              <Myprofile  user={user}/>
            </Route> 
         <Route exact path= "/suggest-edit" component={Suggestedit} />
         <Route exact path= "/car-hire" component={Carhire} />
         <Route exact path= "/restaurants" component={Restaurant} />
         <Route exact path= "/schools" component={Schools} />
         <Route exact path= "/auto-repairs" component={Autorepairs} />
         <Route exact path= "/hospitals" component={Hospitals} />
         <Route exact path= "/salons" component={Salon} />
        <Route exact path= "/categories" component={Categories} />
         <Route exact path= "/notifications/:uid" component={Notifications} />
         <Route exact path= "/home/:uid" component={Home1} />



      </Switch>
    </Router>
  );
}

export default App;
