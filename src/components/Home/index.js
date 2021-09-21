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
import Header from '../Header';


function Home({user}) {
    const [messageCount, setMessageCount]= useState(0);
    const history = useHistory("");
    const [profileDown, setProfileDown] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);


    const logout = () => {
        if (user) {
          auth.signOut();
          history.push("/login-client");
        }
      }
      useEffect(() => {
        db.collection('messages').where("toId", "==" ,`${auth?.currentUser?.uid}`).where("read", "==",false).orderBy('timestamp', 'desc')
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
        <>
        <body class="html front not-logged-in one-sidebar sidebar-first page-node" >
       <p class="skip-link__wrapper" style={{display: "none"}}>
        <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation</a>
          </p>


  
       <Header/>
                         
                   <main style={{marginTop: 70}}>
                   <h1 class="hidden" style={{display: "none"}}></h1> 

                   <section class="hero-image"><div class="hero-image-slide">
                                <div class="image-holder"><div class="caption">
                                    <h1>Find everything in one click.
                                        
                                    </h1>
                                    <p>We’ll point you to what you’re looking for, wherever you are.</p>
                                </div>
                                <div style={{flexDirection: "column"}} class="col-md-10 col-sm-10 col-xs-10 searching-form">

                                <form class="search-form search-yellowpageskenya">
                                        <div class="form-row">
                                            <div class="col-md-5 col-sm-5 col-xs-12"> 
                                                <label class="sr-only" for="lookingfor">What You Looking For</label>
                                                <div class="input-group mb-2"><div class="input-group-prepend">
                                                    <div class="input-group-text"><span><SearchIcon /></span>
                                                    </div>
                                                </div> 
                                                <input type="text" class="form-control" name="what" id="lookingfor" onChange={updateSearchResults} placeholder="I am Looking For...."/>
                                                <div style={{}} className="dropdown-content3">
          <ul id="list">
            {
              posts !== undefined ? (
                filteredUsers.map((user1) => (
                  <li>
                    <a  href={`/searchresults/${user1.industry}/${user1.businessName}`}>
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
                                        </div>
                                        <div class="col-md-5 col-sm-5 col-xs-12"> 
                                            <label class="sr-only" for="location">Location</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <span><AddLocationIcon /></span>
                                                    </div></div> <input type="text" class="form-control" name="where" onClick={()=> alert("not yet working")} id="location" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div class="col-md-1 col-sm-1 col-xs-12">
                                                <button class="btn btn-primary" onClick={()=> alert("not yet working")} style={{backgroundColor: "#089bcc",color:"#fff"}}>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                            </section>
                            <section class="featured-categories">
                            <div class="container view-content">
                                {/* 1st Row */}
        <div class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>

                </div>


{/* 2nd Row */}

                <div style={{marginTop: 20}} class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>

                </div>

                {/* 3rd Row */}

                <div style={{marginTop: 20}} class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>

                </div>

                {/* 4th Row */}
                <div style={{marginTop: 20}} class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                


                {/* 5th Floor */}
                <div style={{marginTop: 20}} class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>

                </div>


                {/* 6th Row */}
                <div style={{marginTop: 20}} class="row">
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/schools" title="Schools - We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." aria-label="We have rich, factual, and authentic information about schools in the country. Primary schools, Secondary school, and Universities and colleges." data-title="Schools">
                        <span>
                            <SchoolIcon />
                            </span>Schools
                        </a>
                    </h3>
                </div>
            </div>
        <div class="col-md-2 col-sm-6 col-xs-12 category">
                        <div class="category-inner">
                            <h3> <a href="/salons" title="Salon - We know you have been looking for that salon in Umoja, Nairobi! We got it.." aria-label="We know you have been looking for that salon in Umoja, Nairobi! We got it.." data-title="Salon">
                                <span>
                                    <FaceIcon />
                                    </span>Salon
                                </a>
                            </h3>
                        </div>
                    </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> <a href="/restaurants" title="Restaurants - Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" aria-label="Msimu huu tunapokaribia likizo,pata mikahawa kwa urahisi.Mikahawa maeneo ya Nairobi, Mombasa, Kisumu na kote nchini" data-title="Restaurants">
                        <span><RestaurantIcon />
                        </span>Restaurants
                        </a>
                    </h3>
                </div>
            </div>
            <div class="col-md-2 col-sm-6 col-xs-12 category">
            <div class="category-inner"><h3> <a href="/car-hire" title="Car Hire - The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" aria-label="The holidays are around the corner and just like everyone else, we know you need a vehicle to move around with family. Find a taxi cab today" data-title="Car Hire">
                <span>
                    <LocalTaxiIcon /></span>Car Hire</a>
                    </h3>
                </div>
            </div>

            <div class="col-md-2 col-sm-6 col-xs-12 category">
                <div class="category-inner">
                    <h3> 
                        <a href="/auto-repairs" title="Auto Repairs - Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" aria-label="Just like any other asset, your vehicle is just as important. That is why you should have it checked often. Wondering where you can get a repair shop, find one near you here!" data-title="Auto Repairs">
                            <span><BuildIcon /></span>Auto Repairs
                            </a>
                        </h3>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-xs-12 category">
                    <div class="category-inner">
                        <h3> 
                            <a href="/hospitals" title="Hospitals - We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" aria-label="We have information of hospitals all over the country. Hospitals in Nairobi. Thika, Kitengela, Ruiru, Nakuru, Naivasha,Kisumu, Mobasa NHIF accredited hospitals, those with affordable insurance etc" data-title="Hospitals">
                                <span><LocalHospitalIcon /></span>Hospitals
                                </a>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
</section> 

<section class="promos">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 "> 
                        <a href="telephone-directories/August-Edition/Telephone-Directories-Nairobi-August-Edition.html" title="Digital Directory - Monthly-edition" target="_blank"> 
                            <img class="lazyload hidden-sm-down desktop" data-src="https://visme.co/blog/wp-content/uploads/how-to-create-winnig-visual-for-your-fb-ad-header-2.gif" alt="Digital Directory - Monthly-edition" width="1110" height="142" src="https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/InteresttargetingBlogHeader810400.gif"/> 
                            <img class="lazyload hidden-md-up mobile" style={{display: "none"}} data-src="https://visme.co/blog/wp-content/uploads/how-to-create-winnig-visual-for-your-fb-ad-header-2.gif" alt="Digital Directory - Monthly-edition" width="330" height="68"/>
                         </a>
                        </div>
                    </div>
                </div>
        </section> 
        <section class="grow-your-business1">
            <h2>Grow With Us</h2>
            <div class="view-header">
                    <p>As we have grown, we walk with you to growth.</p>
                </div><div class="container view-content">
                    <div class="row">
                        
                        <div class="col-md-4 col-sm-12 col-xs-12 grow">
                            <div class="get-noticed"><h3>Get Noticed</h3>
                                <p>Improve your company’s visibility, get your products purchased and grow! See how we can get more eyes on you here.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 grow">
                            <div class="get-noticed">
                                <h3>Get Customers</h3>
                                <p>Clients trust those who have been trusted by others. How does an SME get the clout to form those oh so rewarding connections? It begins here, with us and our growing network of clients.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 grow">
                            <div class="get-noticed">
                                <h3>Get Results</h3>
                                <p>We deliver tangible, measurable results that guide your growth path.</p>
                            </div>
                        </div>
                        <div class="learn-how-cta"> 
                            <a href="/register-business" class="btn btn-lg btn-outline-primary" title="Advertise with us ... be part of Daredream">Learn How<span><i class="fas fa-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
             </section>

             <section class="digital-marketting">
            <div class="container"><div class="row">
                <div class="col-md-7 col-sm-7 col-xs-12 digital-image"> 
                    <a href="free-website-your-business-6-months-free-awesome-digital-prescence.html" target="_self" title="yp media"> 
                        <img class="lazyload" data-src="https://yellowpageskenya.com/sites/all/themes/yp/images/digital-marketting.png" alt="Get a free website today - yp media" width="635" height="423" src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Business-of-Apps-Main-Directory-Profile.png"/> 
                    </a>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-12 digital-content">
                    <h2>Daredream Media</h2>
                    <p>For your online and offline business mark your presence on digital world. <strong>Stand out in the market.</strong></p>
                    <div class="agency-cta"> 
                        <a href="register-business" class="btn btn-lg btn-outline-primary" title="Advertise with us ... be part of Daredream">Advertise with Us<span><i class="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="popular-searches">
            <h2>Popular Searches</h2>
            <div class="container view-content">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12 searches">
                        <h3>
                            <a href="search-resultsa2b6.html?what=Schools&amp;category=Schools" aria-label="Schools" title="Schools" data-title="Schools">Schools</a>
                        </h3>
                        <div class="item-list">
                            <ul>
                                <li class="first">
                                    <a href="category/business-schools.html" target= "_self" data-title="Business Schools" aria-label="Business Schools" title="Business Schools">Business Schools
                                    </a>
                                </li>
                                <li>
                                    <a href="category/driving-schools.html" target= "_self" data-title="Driving Schools" aria-label="Driving Schools" title="Driving Schools">Driving Schools</a>
                                </li>
                                <li>
                                    <a href="category/flying-schools.html" target= "_self" data-title="Flying Schools" aria-label="Flying Schools" title="Flying Schools">Flying Schools
                                    </a>
                                </li>
                                <li>
                                    <a href="category/hairdressing-schools.html" target= "_self" data-title="Hairdressing Schools" aria-label="Hairdressing Schools" title="Hairdressing Schools">Hairdressing Schools
                                    </a>
                                </li>
                                <li>
                                    <a href="category/international-schools.html" target= "_self" data-title="International Schools" aria-label="International Schools" title="International Schools">International Schools
                                    </a>
                                </li>
                                <li>
                                    <a href="category/private-schools-secondary.html" target= "_self" data-title="Private Schools - Secondary" aria-label="Private Schools - Secondary" title="Private Schools - Secondary">Private Schools - Secondary
                                    </a>
                                </li>
                                <li>
                                    <a href="category/private-schools-primary.html" target= "_self" data-title="Private Schools - Primary" aria-label="Private Schools - Primary" title="Private Schools - Primary">Private Schools - Primary
                                    </a>
                                </li>
                                <li>
                                    <a href="category/music-schools.html" target= "_self" data-title="Music Schools" aria-label="Music Schools" title="Music Schools">Music Schools</a></li><li><a href="category/language-schools.html" target= "_self" data-title="Language Schools" aria-label="Language Schools" title="Language Schools">Language Schools
                                    </a>
                                </li>
                                <li class="last">
                                    <a href="category/religious-schools.html" target= "_self" data-title="Religious Schools" aria-label="Religious Schools" title="Religious Schools">Religious Schools
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 searches">
                        <h3>
                            <a href="search-results01b3.html?what=Auto%20Mobiles&amp;category=Auto%20Mobiles" aria-label="Auto Mobiles" title="Auto Mobiles" data-title="Auto Mobiles">Auto Mobiles

                            </a>
                        </h3>
                        <div class="item-list">
                            <ul>
                                <li class="first">
                                    <a href="category/car-hire.html" target= "_self" data-title="Car Hire" aria-label="Car Hire" title="Car Hire">Car Hire
                                    </a>
                                </li>
                                <li>
                                    <a href="category/car-parks.html" target= "_self" data-title="Car Parks" aria-label="Car Parks" title="Car Parks">Car Parks
                                    </a>
                                </li>
                                <li>
                                    <a href="category/car-shades.html" target= "_self" data-title="Car Shades" aria-label="Car Shades" title="Car Shades">Car Shades
                                    </a>
                                </li>
                                <li>
                                    <a href="category/car-key-programmers.html" target= "_self" data-title="Car Key Programmers" aria-label="Car Key Programmers" title="Car Key Programmers">Car Key Programmers
                                    </a>
                                </li>
                                <li class="last"><a href="category/car-wash.html" target= "_self" data-title="Car Wash" aria-label="Car Wash" title="Car Wash">Car Wash
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 searches">
                    <h3>
                        <a href="search-resultsbd03.html?what=Legal%20Firms&amp;category=Legal%20Firms" aria-label="Legal Firms" title="Legal Firms" data-title="Legal Firms">Legal Firms

                        </a>
                    </h3>
                    <div class="item-list">
                        <ul>
                            <li class="first">
                                <a href="category/advocates-lawyers-commissioners-oath-notaries-public.html" target= "_self" data-title="Advocates" aria-label="Advocates" title="Advocates">Advocates
                                </a>
                            </li>
                            <li>
                                <a href="category/advocates-lawyers-commissioners-oath-notaries-public.html" target= "_self" data-title="Advocates, Lawyers &amp; Commissioners For Oath &amp; Notaries Public" aria-label="Advocates, Lawyers &amp; Commissioners For Oath &amp; Notaries Public" title="Advocates, Lawyers &amp; Commissioners For Oath &amp; Notaries Public">Advocates, Lawyers &amp; Commissioners For Oath &amp; Notaries Public
                                </a>
                            </li>
                            <li>
                                <a href="category/lawyers-advocates.html" target= "_self" data-title="Lawyers &amp; Advocates" aria-label="Lawyers &amp; Advocates" title="Lawyers &amp; Advocates">Lawyers &amp; Advocates</a></li><li><a href="category/development-consultants.html" target= "_self" data-title="Development Consultants" aria-label="Development Consultants" title="Development Consultants">Development Consultants
                                </a>
                            </li>
                            <li>
                                <a href="category/tax-consultants.html" target= "_self" data-title=" Tax Consultants" aria-label=" Tax Consultants" title=" Tax Consultants"> Tax Consultants
                                </a>
                            </li>
                            <li>
                                <a href="category/management-consultants.html" target= "_self" data-title=" Management Consultants" aria-label=" Management Consultants" title=" Management Consultants"> Management Consultants
                                </a>
                            </li>
                            <li class="last"><a href="category/mapping-consultants.html" target= "_self" data-title="Mapping Consultants" aria-label="Mapping Consultants" title="Mapping Consultants">Mapping Consultants
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 searches">
                <h3>
                    <a href="search-results1b2e.html?what=Medical%20Practitioners&amp;category=Medical%20Practitioners" aria-label="Medical Practitioners" title="Medical Practitioners" data-title="Medical Practitioners">Medical Practitioners

                    </a>
                </h3>
                <div class="item-list">
                    <ul>
                        <li class="first">
                            <a href="category/medical-practitioner-paediatric-surgeon.html" target= "_self" data-title="Paediatric Surgeon" aria-label="Paediatric Surgeon" title="Paediatric Surgeon">Paediatric Surgeon
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-practitioners-allergists.html" target= "_self" data-title="Allergists" aria-label="Allergists" title="Allergists">Allergists
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-assistance-organizations.html" target= "_self" data-title="Medical Assistance Organizations" aria-label="Medical Assistance Organizations" title="Medical Assistance Organizations">Medical Assistance Organizations
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-centres.html" target= "_self" data-title="Medical Centres" aria-label="Medical Centres" title="Medical Centres">Medical Centres
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-practitioners-pharmacists.html" target= "_self" data-title="Pharmacists" aria-label="Pharmacists" title="Pharmacists">Pharmacists
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-practitioners-chest-physicians.html" target= "_self" data-title="Chest Physicians" aria-label="Chest Physicians" title="Chest Physicians">Chest Physicians
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-practitioners-gynaecologists.html" target= "_self" data-title="Gynaecologists" aria-label="Gynaecologists" title="Gynaecologists">Gynaecologists
                            </a>
                        </li>
                        <li>
                            <a href="category/medical-practitioners-urologist.html" target= "_self" data-title="Urologist" aria-label="Urologist" title="Urologist">Urologist
                            </a>
                        </li>
                        <li class="last">
                            <a href="category/medical-practitioners-orthopaedic-surgeons.html" target= "_self" data-title="Orthopaedic Surgeons" aria-label="Orthopaedic Surgeons" title="Orthopaedic Surgeons">Orthopaedic Surgeons
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="popular-articles">
            <h2>Popular Articles</h2>
            <div class="container view-content">
                <div class="carousel-item1 active">
                    <div id="article-slide" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner1">
                            <div class="col-md-4 col-sm-12 col-xs-12 article-card">
                                <div class="card"> 
                                <img class="card-img-top lazyload" data-src="https://yellowpageskenya.com/sites/default/files/styles/thumbnail_318x262/public/do-i-need-a-website-for-my-business.png?itok=-VZ7z-j6" alt="Do I need a website for my small business? - Whether big or small, the truth is, you need a business website regardless. I know, you might be there thinking, “do I REALLYYYY need a website yet I have come this far without it anyway?” Look, times are changing, your competitors are adapting to new forms of technology to drive sales and keep up with their competitors. So should you." width="340" height="280" src="https://cdn.optinmonster.com/wp-content/uploads/2017/10/best-website-builder-for-small-business-min.png"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Please don&#039;t do this when creating your new website</h5><p>21st July 2020</p> 
                                        <a href="/register-business" title="Please don&#039;t do this when creating your new website - Some advice to Startups and Business Owners that are bringing their businesses online for the first time, do not build your website without clear objectives about what it is that it is meant to achieve." aria-label="Please don&#039;t do this when creating your new website - Some advice to Startups and Business Owners that are bringing their businesses online for the first time, do not build your website without clear objectives about what it is that it is meant to achieve.">Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-xs-12 article-card">
                                <div class="card"> 
                                    <img class="card-img-top lazyload" data-src="https://yellowpageskenya.com/sites/default/files/styles/thumbnail_318x262/public/5-five-reasons-to-advertise-on-social-media_0.png?itok=e49cySXx" alt="5 Reasons to advertise on social media - Follow me on Instagram and What’s your name on Facebook are two phrases that are increasingly part of our daily lives. In fact, these days, we need to confirm that people exist on these social platforms before we form deeper ties with someone." width="340" height="280" src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                    <div class="card-body">
                                        <h5 class="card-title">5 Reasons to advertise on social media</h5>
                                        <p>21st July 2020</p> 
                                        <a href="https://blog.yellowpageskenya.com/the-benefits-of-social-media-ads/" title="5 Reasons to advertise on social media - Follow me on Instagram and What’s your name on Facebook are two phrases that are increasingly part of our daily lives. In fact, these days, we need to confirm that people exist on these social platforms before we form deeper ties with someone." aria-label="5 Reasons to advertise on social media - Follow me on Instagram and What’s your name on Facebook are two phrases that are increasingly part of our daily lives. In fact, these days, we need to confirm that people exist on these social platforms before we form deeper ties with someone.">Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-xs-12 article-card">
                                <div class="card"> 
                                    <img class="card-img-top lazyload" data-src="https://yellowpageskenya.com/sites/default/files/styles/thumbnail_318x262/public/do-i-need-a-website-for-my-business.png?itok=-VZ7z-j6" alt="Do I need a website for my small business? - Whether big or small, the truth is, you need a business website regardless. I know, you might be there thinking, “do I REALLYYYY need a website yet I have come this far without it anyway?” Look, times are changing, your competitors are adapting to new forms of technology to drive sales and keep up with their competitors. So should you." width="340" height="280" src="https://cdn.optinmonster.com/wp-content/uploads/2017/10/best-website-builder-for-small-business-min.png"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Do I need a website for my small business?</h5>
                                        <p>21st July 2020</p> 
                                        <a href="https://blog.yellowpageskenya.com/do-i-need-a-website-for-my-small-business/" title="Do I need a website for my small business? - Whether big or small, the truth is, you need a business website regardless. I know, you might be there thinking, “do I REALLYYYY need a website yet I have come this far without it anyway?” Look, times are changing, your competitors are adapting to new forms of technology to drive sales and keep up with their competitors. So should you." aria-label="Do I need a website for my small business? - Whether big or small, the truth is, you need a business website regardless. I know, you might be there thinking, “do I REALLYYYY need a website yet I have come this far without it anyway?” Look, times are changing, your competitors are adapting to new forms of technology to drive sales and keep up with their competitors. So should you.">Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="app-download-cta">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 app-mockup"> 
                        <img class="lazyload" data-src="/sites/default/files/icons/take-yp-with-you-thumb.jpg" data-webp="/sites/default/files/icons/take-yp-with-you-thumb.webp" alt="With the YP app, you can find millions of local businesses on the go and quickly connect with them from anywhere. It's free!" width="550" height="421" src="https://www.mobileaction.co/blog/wp-content/uploads/2017/07/searchadsoverview.jpg" style={{objectFit: "cover"}}/>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 app-content">
                        <h2>Take Daredream with you</h2>
                        <p>With the Daredream app, you can find millions of local businesses on the go and quickly connect with them from anywhere. It's free!</p> 
                        <a rel="noopener noreferrer" arial-label="Download Daredream App On Google Playstore Store" href="https://play.google.com/store/apps/details?id=com.yellowpages.appke" target="_blank">
                            <span><i class="fab fa-google-play"></i></span>Download On Google Play
                        </a> 
                        <a rel="noopener noreferrer" arial-label="Download Daredream App On Apple Store" href="https://apps.apple.com/ke/app/postel-yellow-pages/id916150441" target="_blank">
                            <span><i class="fab fa-apple"></i></span>Download On Apple Store
                        </a>
                    </div>
                </div>
            </div>
        </section>


        


        
        <section class="partners-logo">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 partner-heading">
                        <h2>Partnerships and Memberships</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3 partner-logo">
                        <a target="_blank" href="https://bigfivedigital.org/" title="BigFive Digital helps African and Middle Eastern (AME) media and tech companies build and take to market digital products and services for the region's small and medium-sized enterprises (SMEs)." rel="noopener noreferrer">
                            <img class="lazyload" data-src='/sites/all/themes/yp/images/partners/bigfive.jpg' alt="BigFive Digital helps African and Middle Eastern (AME) media and tech companies build and take to market digital products and services for the region's small and medium-sized enterprises (SMEs)." width="200" height="200" src="https://yellowpageskenya.com/sites/all/themes/yp/images/partners/bigfive.jpg"/> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3 partner-logo"> 
                        <a target="_blank" href="https://www.microsoft.com/en-ke/solution-providers/home" title="We are offering our virtual Workplace solution to your businesses. Let Microsoft Office 365 and Microsoft Teams revamp the way you work. How about a six month free trial?" rel="noopener noreferrer"> 
                            <img class="lazyload" data-src='/sites/all/themes/yp/images/partners/microsoft-logo.jpg' alt="MICROSOFT: Let Microsoft Office 365 and Microsoft Teams revamp the way you work. How about a six month free trial?" rel="noopener noreferrer" width="200" height="200" src="https://yellowpageskenya.com/sites/all/themes/yp/images/partners/microsoft-logo.jpg"/> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3 partner-logo"> 
                        <a target="_blank" href="https://www.monosolutions.com/" title="Daredream Drive online success for SMBs" rel="noopener noreferrer" > 
                            <img class="lazyload" data-src='/sites/all/themes/yp/images/partners/mono.jpg' alt="MONO: Daredream Drive online success for SMBs" width="200" height="200" src="https://yellowpageskenya.com/sites/all/themes/yp/images/partners/mono.jpg"/> 
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3 partner-logo"> 
                        <a target="_blank" href="https://www.yext.com/" title="Every day customers ask questions about your brand. Shouldn’t the answers come from you? Deliver brand verified answers with Yext." rel="noopener noreferrer"> 
                            <img class="lazyload" data-src='/sites/all/themes/yp/images/partners/yext.jpg' alt="YEXT: Every day customers ask questions about your brand. Shouldn’t the answers come from you? Deliver brand verified answers with Yext." width="200" height="200" src="https://yellowpageskenya.com/sites/all/themes/yp/images/partners/yext.jpg"/> 
                        </a>
                    </div>
                </div>
            </div>
        </section>




        
                   </main>                                 
          





                  </body>
                  <Footer />

                  </>
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
      <div  className="dropdown1" style={{ height: menuHeight }} ref={dropdownRef}>
  




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
                <a href="/categories">
                  <p style={{marginTop:0}}>Business Categories</p>
                  </a>
                  </DropdownItem>
            <DropdownItem style={{marginTop: 15}} leftIcon={<BusinessCenterSharpIcon />}>
                <a href="/list-businesses">
                  <p style={{marginTop:0}}>Business Locations</p>
                  </a>
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
            <Link to="/login-client">
                  <p style={{marginTop:0}}>List a job</p>
                  </Link>
            </DropdownItem>

            <DropdownItem style={{marginTop: 15}} leftIcon={<BusinessCenterSharpIcon />}>
                <Link to="/list-jobs">
                  <p style={{marginTop:0}}>Available Jobs</p>
                  </Link>
                  </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
export default Home
