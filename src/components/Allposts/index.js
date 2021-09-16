import React, {useEffect, useState} from 'react';
import './styles.css'
import Posts from './Posts';
import {auth,db} from './../firebase'
import { useHistory } from 'react-router-dom';
import Header from "../Header"
import Footer from "../Footer"
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import FormSelect from './../forms/FormSelect';
import Button from '@material-ui/core/Button';

function Allposts() {
    const history = useHistory("");
    const [posts, setPosts] = useState([]);
    const [location, setLocation] = useState("")
    const [category1, setCategory1] = useState("")
   const {currentUser} = auth


   useEffect(() => {
    db.collection('businesses').where("type","==","business").orderBy("timestamp", "desc").onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
        })));
    })
}, []);
    return (
        <div>
         <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                <Header />
                <main style={{marginTop: 70}}>
                <section data-cat="886" class="search-results" itemscope itemtype="https://schema.org/ItemList https://schema.org/LocalBusiness">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8 col-sm-8 col-xs-12 results-area">
                                            {/* <a href="#" class="filter-mobile">Tap to Apply Filter<span>
                                                <i class="fas fa-filter"></i></span>
                                            </a> */}
                                    {/* here */}

                                    {/* <div class="fliter-area">
                                                    <div class="filter-drop">
                                                    <div class="col-md-2 col-sm-2 col-xs-12 filter-txt">
                                                        <p>Filter By</p>
                                                    </div>
                                                    <div class="btn-group dropdown col-md-5 col-sm-5 col-xs-6 no_padding"> 
                                                        <button type="button" class="btn btn-secondary dropdown-toggle col-md-12 col-sm-12 col-xs-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                            <span class="cat-txt">Category</span> 
                                                        </button>
                                                            <div class="dropdown-menu dropdown-menu-right category-drop">
                                                                <div class="container">
                                                                    <div class="row">
                                                                         <a class="col-sm-12 col-md-12 col-xs-12" title="Filter by category Car Hire" href="../../../search-results06de.html?what=Car%20Hire&amp;where=%20in%20Avenue%20Motors%20premises%20opp%20Equity%20Bank,%20Moi%20Ave&amp;category=Car%20Hire" >Car Hire
                                                                        </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group dropdown col-md-5 col-sm-5 col-xs-6 no_padding"> 
                                                                <button type="button" class="btn btn-secondary dropdown-toggle col-md-12 col-sm-12 col-xs-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <span class="loc-txt"> Location</span> 
                                                                </button>
                                                                    
                                                                    <div class="dropdown-menu dropdown-menu-right location-drop">
                                                                        <div class="container">
                                                                            <div class="row"> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Mombasa
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Mombasa - Shimanzi/Ganjoni
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Nairobi
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Nairobi - Nairobi Central
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Nairobi - Embakasi
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Mombasa - Majengo
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Mombasa - Airport
                                                                                </a> 
                                                                                <a class="col-sm-12 col-md-12 col-xs-12" href="#">Mombasa - Mji Wakale/Makadara
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="resultsfound" itemprop="name"> 
                                                                <span> Page <strong>1 of 2</strong> | <strong>17</strong> 
                                                                </span>
                                                                <p>result(s) found for</p> 
                                                                <span>Car Hire in Avenue Motors premises opp Equity Bank, Moi Ave</span>
                                                            </div>
                                                        </div>  */}




                                                    

                                                        
<section class="results-shown">                                                            
<div style={{display: "flex",flexWrap: "wrap",alignItems: "center"}}>
<FormGroup>
 

 <FormSelect  style={{color: "#555",border: "1px solid #888888",borderRadius: 5,marginLeft:10}}
                   
                   
                    
                   options={[{
                     value: "",
                     name: "browse business by location"
                   },
                   {
                     value: "Baringo",
                     name: "Baringo"
                   }, {
                     value: "Bomet‎",
                     name: "Bomet"
                   }, {
                     value: "Bungoma",
                     name: "Bungoma"
                   }, {
                     value: "Busia",
                     name: "Busia"
                   }, {
                     value: "Elgeyo-Marakwet",
                     name: "Elgeyo-Marakwet"
                   }, {
                     value: "Embu",
                     name: "Embu"
                   }, {
                     value: "Garissa",
                     name: "Garissa"
                   }, {
                     value: "Homa Bay",
                     name: "Homa Bay"
                   }, {
                     value: "Isiolo",
                     name: "Isiolo"
                   }, {
                     value: "Kajiado",
                     name: "Kajiado"
                   }, {
                     value: "Kakamega",
                     name: "Kakamega"
                   }, {
                     value: "Kericho",
                     name: "Kericho"
                   }, {
                     value: "Kiambu",
                     name: "Kiambu"
                   }, {
                     value: "Kilifi",
                     name: "Kilifi"
                   }, {
                     value: "Kirinyaga",
                     name: "Kirinyaga"
                   }, {
                     value: "Kisii",
                     name: "Kisii"
                   }, {
                     value: "Kisumu",
                     name: "Kisumu"
                   }, {
                     value: "Kitui",
                     name: "Kitui"
                   }, {
                     value: "Kwale",
                     name: "Kwale"
                   }, {
                     value: "Laikipia",
                     name: "Laikipia"
                   }, {
                     value: "Lamu",
                     name: "Lamu"
                   }, {
                     value: "Machakos",
                     name: "Machakos"
                   }, {
                     value: "Makueni",
                     name: "Makueni‎"
                   }, {
                     value: "Mandera",
                     name: "Mandera"
                   }, {
                     value: "Marsabit",
                     name: "Marsabit"
                   }, {
                     value: "Meru",
                     name: "Meru"
                   }, {
                     value: "Migori",
                     name: "Migori"
                   }, {
                     value: "Mombasa",
                     name: "Mombasa"
                   }, {
                     value: "Murang'a",
                     name: "Murang'a"
                   }, {
                     value: "Nairobi‎",
                     name: "Nairobi‎"
                   }, {
                     value: "Nakuru",
                     name: "Nakuru"
                   }, {
                     value: "Nandi",
                     name: "Nandi"
                   }, {
                     value: "Narok",
                     name: "Narok"
                   }, {
                     value: "Nyamira",
                     name: "Nyamira"
                   }, {
                     value: "Nyandarua",
                     name: "Nyandarua"
                   }, {
                     value: "Nyeri",
                     name: "Nyeri"
                   }, {
                     value: "Samburu",
                     name: "Samburu"
                   }, {
                     value: "Siaya",
                     name: "Siaya"
                   }, {
                     value: "Taita-Taveta",
                     name: "Taita-Taveta"
                   }, {
                     value: "Tana River",
                     name: "Tana River"
                   }, {
                     value: "Tharaka-Nithi",
                     name: "Tharaka-Nithi"
                   }, {
                     value: "Trans-Nzoia",
                     name: "Trans-Nzoia"
                   }, {
                     value: "Turkana",
                     name: "Turkana"
                   }, {
                     value: "Uasin Gishu",
                     name: "Uasin Gishu"
                   }, {
                     value: "Vihiga",
                     name: "Vihiga"
                   }, {
                     value: "Wajir",
                     name: "Wajir"
                   }, {
                     value: "West Pokot",
                     name: "West Pokot"
                   }]} 
                   required=""             
                   onChange={(e) => setLocation(e.target.value)} type="text" 
                 />



 
 </FormGroup>

 <FormGroup>
 

 <FormSelect  style={{color: "#555",border: "1px solid #888888",borderRadius: 5,marginLeft:10}}
                   
                   
                    
                   options={[{
                     value: "",
                     name: "browse business by category"
                   },
                         {
                           value: "car-hire",
                           name: "Car Hire"
                         }, {
                           value: "restaurant",
                           name: "Restaurant"
                         }, {
                           value: "school",
                           name: "School"
                         }, {
                           value: "auto-repair",
                           name: "Auto Repair"
                         }, {
                           value: "Hospital",
                           name: "Hospital"
                         }, {
                          value: "salon",
                          name: "Salon"
                        }]} 
                         required=""             
                         onChange={(e) => setCategory1(e.target.value)} type="text" 
                       />   



 
 </FormGroup>
</div>    
           
{
    posts.map(({ id, post }) => (
        < Posts 
        key={id} 
        address={post.address} 
        postId={id} 
        businessName={post.businessName} 
        descriptions={post.descriptions}  
        industry={post.industry} 
        location={post.location} 
        ownerEmail={post.ownerEmail} 
        timestamp={post.timestamp}
        ownerId={post.ownerId} 
        ownerUsername={post.ownerUsername}
        ownerphotoURL={post.ownerphotoURL}
        phone={post.phone}
        postImage={post.postImage} 
        location1={location}
        category1={category1}
        />

    ))
}

                                
                                        </section>  
                                                                           
                                                                           
                                         </div>  
                                    </div>                            
                          

                </div>                            
                </section>
                </main>


            </body>
            <Footer />
        </div>
    )
}

export default Allposts
