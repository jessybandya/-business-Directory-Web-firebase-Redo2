import React,{useState,useEffect} from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {useParams,Link} from 'react-router-dom'
import { db,auth } from '../firebase'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from 'react-router-dom';


function Listbusinessdetails({user}) {
  const { postId, name, phone, email, ownerId, businessName, descriptions, industry, address, location} = useParams();
  const history = useHistory("");
  const [post, setPost] = useState();

  useEffect(() => {
    db.collection('businesses').doc(postId).onSnapshot((doc) => {
      setPost(doc.data());
    });
}, [])

if(!user){
        history.push("/login-client");
}
    return (
        <>
        <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header />

        <div>
                



        <main style={{marginTop: 70}}> 
                                <section class="single-business-timeline" data-value="1" data-business="Wairimu Car Hire" data-catname="Car Hire">
                                        <div class="container-fluid timelinephoto">
                                                <div class="container business-heading">
                                                        <div class="row">
                                                                <div class="col-md-8 col-sm-8 col-xs-12 biz-name">
                                                                        <div class="row">
                                                                                <div class="col-md-3 col-sm-3 col-xs-12 cover-logo"> 
                                                                                        <img class="lazyload" src="https://cdn.yellowpageskenya.com/business-logo.png" alt="Wairimu Car Hire"/>
                                                                                </div><div class="col-md-9 col-sm-9 col-xs-12 business-name">
                                                                                        <h1>{name}</h1> 
                                                                                        <small>{businessName}</small>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="col-md-4 col-sm-4 col-xs-12 biz-buttons">
                                                                        <div class="row">
                                                                                <div class="col-md-6 col-sm-6 col-xs-6 phonenumbers dropdown"> 
                                                                                        <span><i class="fas fa-phone-alt"></i></span> 
                                                                                        <a href="#" class="dropdown-toggle" id="phonenumberdropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phone Numbers

                                                                                        </a>
                                                                                        <div class="dropdown-menu" aria-labelledby="phonenumberdropdown"> 
                                                                                                <a title="Call Now Wairimu Car Hire - Car Hire - 0723 005392" data-business="Wairimu Car Hire" data-catname="Car Hire" data-value="9" class="dropdown-item secondary" href={`tel:${phone}`}>{phone}

                                                                                                </a>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                                <section class="business-details">
                                        <div class="container">
                                                <div class="row">
                                                        <div class="col-md-8 col-sm-8 col-xs-12 info">
                                                                <h2>General Information</h2>
                                                                <div class="info-full">
                                                                        <p>{descriptions}</p>
                                                                </div>
                                                                <div class="row more-info" >
                                                                        <div class=" col-md-6 col-sm-6 col-xs-12">
                                                                                <div class="info-full services products postal">
                                                                                        <div class="address adress" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                                                                 
                                                                                <p><h2>Address</h2></p>
                                                                                <span class="streetAddress" itemprop="streetAddress"> 
                                                                                                        <a class="category" style={{color: "#000"}} title="Discover Car Hire in Car Hire" href="../../category/car-hire/street/gitanga-rd-nairobi.html">
                                                                                                                <i class="fas fa-location-arrow"></i>
                                                                                                        </a> 
                                                                                                        <a class="link" style={{color: "#000"}} href="#" title="Car Hire in Gitanga Rd, Nairobi">{address}, {location}
                                                                                                        </a> 
                                                                                                </span>
                                                                         </div>
 
                                                                                </div> 
                                                                        </div>
                                                                        
                                                                        <div class=" col-md-6 col-sm-6 col-xs-12">
                                                                                <div class="info-full services products">
                                                                                        <h2>Category</h2>
                                                                                        <p><a>{industry}</a></p>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                                <div class="info-full services brands ">
                                                                                        <h2>Activity</h2>
                                                                                        <p><a>{descriptions}</a></p>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                                <div class="info-full services">
                                                                                <h2>Payment Methods</h2>
                                                                                        <p><a>EFT, Cheque, Mpesa</a></p>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                                <h2>Opening Hours</h2>
                                                                <div class="info-full">
                                                                        <div class="opening-days">
                                                                                <ul>
                                                                                        <li>24hrs on call</li>
                                                                                </ul>
                                                                        </div>
                                                                </div> 
                                                                
                                                                <section class="reviews">
                                                                        <div class="summary">

                                                                        </div>
                                                                        <div class="list-reviews">

                                                                        </div>
                                                                </section>
                                                                <div class="container">
                                                                        <div class="row">
                                                                                <div class="col-md-12 col-sm-12 col-xs-12 social share-btns">
                                                                                        <h2 class="block__title">Share This</h2>
                                                                                        <div class="social-share-links inline">
                                                                                                <span class="share-link share-email">
                                                                                                        <a href="mailto:?subject=Wairimu%20Car%20Hire&amp;body=" class="btn btn-info btn-xs">
                                                                                                               
                                                                                                                <div style={{display: "flex",justifyContent: "center",alignContent:"center"}}>
                                                                                                                        <div>
                                                                                                                        <EmailIcon />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                        Email     
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </a>
                                                                                                </span>
                                                                                                <span class="share-link share-facebook">
                                                                                                        <a href="https://www.facebook.com" target="_blank" class="btn btn-info btn-xs" rel="noopener noreferrer">
                                                                                                        <div style={{display: "flex",justifyContent: "center",alignContent:"center"}}>

                                                                                                        
                                                                                                                        <div>
                                                                                                                        <FacebookIcon />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                        Facebook     
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </a>
                                                                                                </span>
                                                                                                <span class="share-link share-twitter">
                                                                                                        <a href="https://twitter.com" target="_blank" class="btn btn-info btn-xs" rel="noopener noreferrer">
                                                                                                        <div style={{display: "flex",justifyContent: "center",alignContent:"center"}}>

                                                                                                        
                                                                                                                        <div>
                                                                                                                        <TwitterIcon />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                        Tweeter     
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </a>
                                                                                                </span>
                                                                                                <span class="share-link share-linkedin">
                                                                                                        <a href="https://www.linkedin.com" target="_blank" class="btn btn-info btn-xs" rel="noopener noreferrer">
                                                                                                        <div style={{display: "flex",justifyContent: "center",alignContent:"center"}}>
                                                                                                                        <div>
                                                                                                                        <LinkedInIcon />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                        LinkedIn     
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </a>
                                                                                                </span>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-xs-12 knowledge-graph map-area">
   
                                           
                                                                <div class="suggest-edit"> 
                                                                        <Link to={`/businesses-email/${name}/${phone}/${email}/${ownerId}/${businessName}/${industry}`} class="btn btn-lg btn-primary" title="Send an email message to Wairimu Car Hire">Send Message To {name}
                                                                        </Link>
                                                                </div>
 
                                                        </div>
                                                </div>
                                        </div>
                                </section>

</main>
        </div>
        </body>
                    <Footer />
    </>
    )
}

export default Listbusinessdetails
