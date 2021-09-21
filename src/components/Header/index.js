import React, { useState, useEffect, useRef } from 'react';
import './styles.css'
import logo from "../../images/design2.png"
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FaceIcon from '@material-ui/icons/Face';
import Footer from '../Footer';
import {auth, db} from "./../firebase";
import {Link, useHistory} from 'react-router-dom';
import Dropdown from '../Dropdown';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WebIcon from '@material-ui/icons/Web';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';
import {Avatar, Badge} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import ContactPhoneSharpIcon from '@material-ui/icons/ContactPhoneSharp';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import {useParams} from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';

function Header({uid}) {

  const [messageCount, setMessageCount]= useState(0);
  const history = useHistory("");
  const [profileDown, setProfileDown] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


    useEffect(() => {
      db.collection('messages').where("toId", "==" , `${uid}`).where("read", "==",false)
     .onSnapshot(snapshot => {
         setMessageCount(snapshot.docs.length)
     }
     )
 }, []);


  useEffect(() => {
    db.collection('businesses').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })

    if (posts !== undefined) {
      const finalUsers = posts.filter(user2 => {
        return user2.businessName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      })

      setFilteredUsers(finalUsers)
    }
  }, [searchTerm])

  const updateSearchResults = (e) => {
    setSearchTerm(e.target.value)
    document.getElementsByClassName('dropdown-content3')[0].style.display = 'block';
  }
    return (
        <div style={{marginBottom: 0}}>
          <header  class="header">
                            <div style={{position: "fixed",width: "100%",display: "flex",zIndex: 2,transitionTimingFunction: "ease-in",transition: "all 0.5s"}} class="navigation">
                                <div class="container">
                                     <nav class="navbar navbar-expand-lg navbar-light main-nav"> 
                                     {auth?.currentUser?.uid &&(
                                         <a href={`/home/${auth?.currentUser?.uid}`}  title="Home" rel="home" class="header__logo navbar-brand logo-img">
                                         <img src={logo} style={{height:50}} alt="Home" class="header__logo-image"  />
                                        </a> 
                                     )}
                                     {!auth?.currentUser?.uid &&(
                                         <a href={`/`}  title="Home" rel="home" class="header__logo navbar-brand logo-img">
                                         <img src={logo} style={{height:50}} alt="Home" class="header__logo-image"  />
                                        </a> 
                                     )}

                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#yellowmobile" aria-controls="yellowmobile" aria-expanded="false" aria-label="Toggle navigation"> 
                                                <span class="navbar-toggler-icon"></span> 
                                            </button>
                                            <div class="collapse navbar-collapse" id="yellowmobile">
                                                <ul class="navbar-nav mr-auto">
                                                {auth?.currentUser?.uid &&(

<li class="nav-item"> 
     <a class="nav-link" 
        href={`/home/${auth?.currentUser?.uid}`}  aria-label="Business categories"><p style={{color:"#fff"}}>Home</p><span class="sr-only">(current)</span>
    </a>
    </li>
)}
{!auth?.currentUser?.uid &&(

<li class="nav-item"> 
     <a class="nav-link" 
        href={`/`}  aria-label="Business categories"><p style={{color:"#fff"}}>Home</p><span class="sr-only">(current)</span>
    </a>
    </li>
)}


                                              
                                              {!auth?.currentUser?.uid &&(
                                                   <li class="nav-item"> <a class="nav-link " href="/about-us" aria-label="contact us"><p style={{color:"#fff"}}>About Us</p></a></li>

                                              )}   
                                              {auth?.currentUser?.uid &&(
                                                   <li class="nav-item"> <a class="nav-link " href={`/about-us1/${auth?.currentUser?.uid}`} aria-label="contact us"><p style={{color:"#fff"}}>About Us</p></a></li>

                                              )}                                                 
                                           {!auth?.currentUser?.uid  &&(
                                              <li class="nav-item"> <a class="nav-link " href="/contact-us" aria-label="contact us"><p style={{color:"#fff"}}>Contact Us</p></a></li>
                                           )}
                                           {auth?.currentUser?.uid  &&(
                                              <li class="nav-item"> <a class="nav-link " href={`/contact-us1/${auth?.currentUser?.uid}`} aria-label="contact us"><p style={{color:"#fff"}}>Contact Us</p></a></li>
                                           )}
                                                        {!auth?.currentUser?.uid &&(
                                                        <li class="nav-item"> <a class="nav-link " href="/register-client" aria-label="contact us"><p style={{color:"#fff"}}>Register</p></a></li>
                                                        )}
                                         {!auth?.currentUser?.uid &&(
                                           <li class="nav-item">
                                           <a class="nav-link " aria-label="contact us" href="/register-business">
                                           <p style={{color:"#fff",marginRight:8,fontWeight: "900"}}>Add Business</p>
                                           </a>
                                       </li>
                                         )} 
                                         {auth?.currentUser?.uid &&(
                                           <li class="nav-item">
                                           <a class="nav-link " aria-label="contact us" href={`/register-business1/${auth?.currentUser?.uid}`}>
                                           <p style={{color:"#fff",marginRight:8,fontWeight: "900"}}>Add Business</p>
                                           </a>
                                       </li>
                                         )}               
                                                        
                                    <li class="nav-item">
                                        <a class="nav-link " aria-label="contact us" href={`/register-job/${auth?.currentUser?.uid}`}>
                                        <p style={{color:"#fff",marginRight:8,fontWeight: "900"}}>Add Job</p>
                                        </a>
                                    </li>
                                                        </ul>
                                                        {auth?.currentUser?.uid &&(
                                                         <a href={`/notifications/${auth?.currentUser?.uid}`}> 
                                                         <Badge badgeContent={messageCount} color="error">
                                                       
                                                       <NotificationsIcon style={{color: "#fff"}}/>
                                                      </Badge>
                                                       </a>
                                                        )}

                                                        <Navbar style={{right:100}} />
 

                                                        </div> 
                                                        </nav>
                                                        </div>
                                                        </div>
                         </header>
        </div>
    )
}

function Navbar(props) {
  return (
    <nav className="navbar1">
      <ul className="navbar-nav1">
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <p style={{marginTop: 15,marginLeft:-4}}>Browse</p>
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item1">
      <a href="#" className="icon-button1" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
      
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button1">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right1">{props.rightIcon}</span>
      </a>
    );
  }


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



      const history = useHistory("");
  const logout = () => {
      if (user) {
        auth.signOut();
        history.push("/login-client");
      }
    }

  return (
    <div className="dropdown1" style={{ height: menuHeight }} ref={dropdownRef}>



{auth?.currentUser?.uid &&(
  <>
          <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div style={{height: 330}} className="menu">
            <DropdownItem
            
            leftIcon={<Avatar src={auth?.currentUser?.photoURL}/>}
          >              <a href={`/myprofile/${auth?.currentUser?.uid}`}>

              {auth?.currentUser?.displayName}
              </a>

          </DropdownItem>
          <DropdownItem 
            leftIcon={<WebIcon />}
            rightIcon={<ArrowForwardIosSharpIcon style={{color: "#00BFFF"}}/>}
            goToMenu="browse">
            Browse
          </DropdownItem>
          <DropdownItem
            leftIcon={<WorkIcon />}
            rightIcon={<ArrowForwardIosSharpIcon style={{color: "#00BFFF"}}/>}
            goToMenu="jobs">
            Jobs
          </DropdownItem>
          <DropdownItem
            leftIcon={<AddCircleOutlineIcon />}
            goToMenu="">
                <a href={`/register-business1/${auth?.currentUser?.uid}`}>
            Add a Business
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BookIcon />}
            goToMenu="">
                <a href={`/news1/${auth?.currentUser?.uid}`}>
            Blog 
            </a>
          </DropdownItem>
          <DropdownItem
          
            leftIcon={<ExitToAppIcon onClick={logout}/>}
            >
            <p style={{marginTop:10}} onClick={logout}>Logout</p>
          </DropdownItem>
        </div>
      </CSSTransition>
  </>
)}



{!auth?.currentUser?.uid &&(
    <>
            <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div style={{height: 280}} className="menu">
              

            <DropdownItem 
              leftIcon={<WebIcon />}
              rightIcon={<ArrowForwardIosSharpIcon style={{color: "#00BFFF"}}/>}
              goToMenu="browse">
              Browse
            </DropdownItem>
            <DropdownItem
              leftIcon={<WorkIcon />}
              rightIcon={<ArrowForwardIosSharpIcon style={{color: "#00BFFF"}}/>}
              goToMenu="jobs">
              Jobs
            </DropdownItem>
            <DropdownItem
              leftIcon={<AddCircleOutlineIcon />}
              goToMenu="">
                  <a href="/register-business">
              Add a Business
              </a>
            </DropdownItem>
            <DropdownItem
              leftIcon={<BookIcon />}
              goToMenu="">
                  <a href="/news">
              Blog 
              </a>
            </DropdownItem>
            <DropdownItem
              leftIcon={<VpnKeySharpIcon />}
              >
            <a style={{marginLeft:0}}  href="/login-client">
                  Login
            </a>
            </DropdownItem>

          </div>
        </CSSTransition>
    </>
)}


<CSSTransition
        in={activeMenu === 'browse'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div style={{height: 180}} className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIosSharpIcon style={{color: "#00BFFF"}}/>}>
            <h3> <i>back</i> </h3>
          </DropdownItem>
          <DropdownItem style={{marginTop: 15}} leftIcon={<BusinessCenterSharpIcon />}>
            {!auth?.currentUser?.uid &&(
              <a href="/categories">
              <p style={{marginTop:0}}>Business Categories</p>
              </a>
            )}
            {auth?.currentUser?.uid &&(
              <a href={`/categories1/${auth?.currentUser?.uid}`}>
              <p style={{marginTop:0}}>Business Categories</p>
              </a>
            )}
                </DropdownItem>
          <DropdownItem style={{marginTop: 15}} leftIcon={<BusinessCenterSharpIcon />}>


                {!auth?.currentUser?.uid &&(
              <a href="/list-businesses">
              <p style={{marginTop:0}}>Business Locations</p>
              </a>
            )}
            {auth?.currentUser?.uid &&(
              <a href={`/list-businesses1/${auth?.currentUser?.uid}`}>
              <p style={{marginTop:0}}>Business Locations</p>
              </a>
            )}

                </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'jobs'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div style={{height: 180}} className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowBackIosSharpIcon style={{color: "#00BFFF"}} />}>
          <h3> <i>back</i> </h3>
          </DropdownItem>
          <DropdownItem leftIcon={<ContactPhoneSharpIcon />}>
            {auth?.currentUser?.uid &&(
          <Link to={`/register-job/${auth?.currentUser?.uid}`}>
          <p style={{marginTop:0}}>List a job</p>
          </Link>
            )}
            {!auth?.currentUser?.uid &&(
          <Link to={`/login-client`}>
          <p style={{marginTop:0}}>List a job</p>
          </Link>
            )}
          </DropdownItem>

          <DropdownItem style={{marginTop: 15}} leftIcon={<BusinessCenterSharpIcon />}>
            {!auth?.currentUser?.uid &&(
              <Link to="/list-jobs">
              <p style={{marginTop:0}}>Available Jobs</p>
              </Link>
            )}
          {auth?.currentUser?.uid &&(
              <Link to={`/list-jobs1/${auth?.currentUser?.uid}`}>
              <p style={{marginTop:0}}>Available Jobs</p>
              </Link>
            )}

                </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Header
