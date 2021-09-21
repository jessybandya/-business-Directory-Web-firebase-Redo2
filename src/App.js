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
import Searchresults from './components/SearchResults';
import Main from "../src/components/chatBot/Main"



import MetaTags from "react-meta-tags";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from "react-chatbot-kit";
import config from "../src/components/chatBot/ChatBotConfig";
import MessageParser from "../src/components/chatBot/MessageParser";
import ActionProvider from "../src/components/chatBot/ActionProvider";


function App() {
  const [showBot, toggleBot] = useState(false);

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
         <Route exact path="/contact-us1/:uid" component={Contact}/>
         <Route exact path="/about-us1/:uid" component={About}/>
         <Route exact path="/about-us" component={About}/>
         <Route exact path="/register-business">
              <Registerbusiness  user={user}/>
            </Route>
            <Route exact path="/register-business1/:uid">
              <Registerbusiness  user={user}/>
            </Route>  
            <Route exact path="/register-job/:uid">
              <Registerjob  user={user}/>
            </Route>
         <Route exact path="/register-client" component={Registerclient}/>
         <Route exact path="/login-client" component={Loginclient}/>
         <Route exact path="/list-businesses" component={Listbusiness}/>
         <Route exact path="/list-businesses1/:uid" component={Listbusiness}/>

         <Route exact path="/list-jobs" component={Allpostsjobs}/>
         <Route exact path="/list-jobs1/:uid" component={Allpostsjobs}/>

         <Route exact path="/list-clients" component={Listclients}/>
         <Route exact path="/news" component={Blog}/>
         <Route exact path="/news1/:uid" component={Blog}/>
         <Route exact path="/searchresults1/:category/:name/:uid" component={Searchresults}/>
         <Route exact path="/searchresults/:category/:name" component={Searchresults}/>



                 <Route exact path="/list-businesses-details/:postId/:name/:phone/:email/:ownerId/:businessName/:descriptions/:industry/:address/:location/:uid">
              <Listbusinessdetails  user={user}/>
            </Route> 
         <Route exact path="/businesses-email/:postId/:name/:phone/:email/:ownerId/:businessName/:category/:uid">
              <Businessemail  user={user}/>
            </Route> 

            <Route exact path="/myprofile/:uid">
              <Myprofile  user={user}/>
            </Route> 
         <Route exact path= "/car-hire" component={Carhire} />
         <Route exact path= "/car-hire1/:uid" component={Carhire} />
         <Route exact path= "/restaurants" component={Restaurant} />
         <Route exact path= "/restaurants1/:uid" component={Restaurant} />
         <Route exact path= "/schools" component={Schools} />
         <Route exact path= "/schools1/:uid" component={Schools} />
         <Route exact path= "/auto-repairs" component={Autorepairs} />
         <Route exact path= "/auto-repairs1/:uid" component={Autorepairs} />
         <Route exact path= "/hospitals" component={Hospitals} />
         <Route exact path= "/hospitals1/:uid" component={Hospitals} />
         <Route exact path= "/salons" component={Salon} />
         <Route exact path= "/salons1/:uid" component={Salon} />
        <Route exact path= "/categories" component={Categories} />
        <Route exact path= "/categories1/:uid" component={Categories} />



         <Route exact path= "/notifications/:uid" component={Notifications} />
         <Route exact path= "/home/:uid" component={Home1} />



      </Switch>
      {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
        style={{backgroundColor: "#00BFFF"}}
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
        >
          <div>Covid</div>
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
      </Flip>
    </Router>
  );
}

export default App;
