import React, { useState,useEffect } from 'react';
import {db,auth} from "./../../firebase"


function Posts({address,postId,businessName,descriptions,industry,location,ownerEmail,timestamp,ownerId,ownerUsername,ownerphotoURL,phone,postImage}) {

    const deletePost = (event) => {
        
        event.preventDefault();
    
        db.collection('businesses').doc(postId).delete().then(function() {
            alert("Post successfully deleted!\nKindly refresh this page");
        }).catch(function(error) {
            alert("Error removing post: ", error);
        });
        
    }
    return (
        <div>
                <ul class="search-results container" id="search-results-items"> 
    <li itemprop="itemListElement" itemscope itemtype="#"> 
      

    <div class="col-md-12 col-sm-12 col-xs-12 results-display" itemscope itemtype="#">
                            <div class="row">
                                        <div class="col-md-3 col-sm-3 col-xs-12 logosarea"> 
                                                                <img itemprop="logo" class="lazyload" src="https://cdn.yellowpageskenya.com/business-logo.png" alt="Avenue Motors Ltd"/>
                                        </div>
                    <div class="col-md-9 col-sm-9 col-xs-12 infoarea"> 
                                        <h2 itemprop="name" style={{fontSize: 20,fontWeight:400}} >{businessName}</h2> 
                    <span class="streetaddress" itemprop="address"> <a class="category" style={{color: "#000"}} title="Discover Car Hire in Car Hire" href={`list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}`}>
                                                                        <i class="fas fa-location-arrow"></i></a> 
                                                                                            <a class="link" href={`list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}`} title="Car Hire in Avenue Motors premises opp Equity Bank, Moi Ave">{address}, {location}
                                                                                            </a> 
                                                                                        </span>
                                                                                        <div class="categorybiz"> 
                                                                                        <span>Category:</span> 
                                                                                            {industry}
                                                                                    </div>
                                                                                    <div class="business-cta">
                                                                    <a href="#" class="bizemail">
                                                                        <p data-toggle="modal" data-target="#exampleModal12" style={{color: "#fff",marginTop:5}}>Delete</p>
                                                                        </a> 
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                    </li>

                       
                                                                                        
                </ul> 

                <div class="modal fade" id="exampleModal12" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style={{color: "red"}} id="exampleModalLabel">Danger!</h5>
        
      </div>
      <div  style={{color: "red"}} class="modal-body">
        Are you sure! you want to delete business name: {businessName}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" style={{background: "red",color:"white"}} onClick={deletePost} >Yes</button>
        <button type="button" class="btn btn-primary" style={{background: "white",color:"red"}} data-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Posts
