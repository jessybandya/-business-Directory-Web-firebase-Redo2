import React, {useEffect, useState} from 'react';
import './styles.css'
import Posts from './Posts';
import {auth,db} from './../firebase'
import { useHistory,useParams } from 'react-router-dom';
import Header from "../Header"
import Footer from "../Footer"

function Autorepairs() {
    let {uid} = useParams();
    const history = useHistory("");
    const [posts, setPosts] = useState([]);
   const {currentUser} = auth


   useEffect(() => {
    db.collection('businesses').where("industry","==", "auto-repair").orderBy("timestamp", "desc").onSnapshot(snapshot => {
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
                <Header uid={uid}/>
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

export default Autorepairs
