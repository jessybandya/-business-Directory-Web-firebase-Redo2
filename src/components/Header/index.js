import React,{useEffect, useState} from 'react'
import logo from "../../images/design2.png"
import './styles.css'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../Footer';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link, useHistory, useParams } from "react-router-dom"
import { auth, db } from '../firebase';
import { Avatar } from '@material-ui/core';

function Header() {

  const [messageCount, setMessageCount]= useState(0);
  const history = useHistory("");
  let { uid } = useParams();
  const [profileDown, setProfileDown] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


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
       <header class="header">
                  <div style={{position: "fixed",width: "100%",display: "flex",zIndex: 1,transitionTimingFunction: "ease-in",transition: "all 0.5s"}} class="navigation">
                          <div class="container">
                                        <nav class="navbar navbar-expand-lg navbar-light main-nav"> 
                                        {auth?.currentUser?.uid &&(
                                          <>
                                               <a href={`/home/${auth?.currentUser?.uid}`} title="Home" rel="home" class="header__logo navbar-brand logo-img">
                                               <img src={logo} style={{height:50}} alt="Home" class="header__logo-image"  />
                                               </a> 
                                          </>
                                        )}
                                        {!auth?.currentUser?.uid &&(
                                          <>
                                               <a href={`/`} title="Home" rel="home" class="header__logo navbar-brand logo-img">
                                               <img src={logo} style={{height:50}} alt="Home" class="header__logo-image"  />
                                               </a> 
                                          </>
                                        )}
                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#yellowmobile" aria-controls="yellowmobile" aria-expanded="false" aria-label="Toggle navigation"> 
                                                  <span class="navbar-toggler-icon"></span> 
                                            </button>
                                  <div class="collapse navbar-collapse" id="yellowmobile">
                                            <ul style={{marginLeft: 50}} class="navbar-nav mr-auto">
                                                  <li style={{marginLeft: 40}} class="nav-item"> 
                                                       <div  class="input-group mb-2">
                                                          <div  class="input-group-prepend">
                                                                  <div class="input-group-text">
                                                                                     <span><SearchIcon/></span>
                                                                   </div>
                                                            </div> 
                                                          <input  name="what" type="text" class="form-control" id="lookingfor" onChange={updateSearchResults} placeholder="I am looking for..."/>
                                                          <div style={{}} className="dropdown-content3">
          <ul id="list">
            {
              posts !== undefined ? (
                filteredUsers.map((user1) => (
                  <li>
                    <a  href={`/list-businesses-details/${user1.id}/${user1.ownerUsername}/${user1.phone}/${user1.ownerEmail}/${user1.ownerId}`}>
                      <Avatar className="searchAvatar" src="https://cdn.yellowpageskenya.com/business-logo.png" />
                      <h3 className="searchH3">{user1.businessName} </h3>
                    </a>
                  </li>
                ))
              ):
              (
                  <h3>No such results</h3>
              )
            
            }
          </ul>
        </div>
                                                        </div>
                                                  </li>

                                                  <li style={{marginLeft: 40}}>
                                  <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                           <div class="input-group-text">
                                                                       <span><AddLocationIcon/></span>
                                                           </div>
                                                </div> 
                                                    <input name="where" value="" type="text" class="form-control" id="location" placeholder="Location"/>
                                  </div>
                                                  </li>
                                    <li class="nav-item"> 
                                          <div stle={{backgroundColor: "#fff"}}  class="col-md-1 col-sm-1 col-xs-12 search-btn"> 
                                                              <button type="submit" style={{backgroundColor:"#fff",color: "#00BFFF"}}  class="btn btn-primary">Search </button>
                                          </div>                                                    
                                    </li>
                                          </ul> 
                                          <Link aria-label="Advertise with us" to="/register-business" style={{borderRadius:45/2,height:45,width:45}} class="btn btn-sm btn-secondary">
                                            <div style={{alignItems: "center",justifyContent: "center",alignContent: "center"}}>
                                            <div><AddIcon style={{color: "#00BFFF"}}/></div>
                                          <div style={{color: "#00BFFF"}}>
                                            <i></i>
                                          </div>
                                            </div>

                                                        </Link>
                                                        </div> 
                                                        </nav>
                                                        </div>
                                                        </div>
                         </header>
        </div>
    )
}


export default Header
