import React from 'react'
import {auth} from "../../firebase"
function Posts({address,postId,businessName,descriptions,industry,location,ownerEmail,timestamp,ownerId,ownerUsername,ownerphotoURL,phone,postImage}) {
    return (
        <div>
                <ul class="search-results container" id="search-results-items"> 
    <li itemprop="itemListElement" itemscope itemtype="#"> 
      

    <div class="col-md-12 col-sm-12 col-xs-12 results-display" itemscope itemtype="#">
                            <div class="row">
                                        <div class="col-md-3 col-sm-3 col-xs-12 logosarea"> 
                                        <a itemprop="url" href={`/list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${descriptions}/${industry}/${address}/${location}/${auth?.currentUser?.uid}`} title="Avenue Motors Ltd"> 
                                                                <img itemprop="logo" class="lazyload" src="https://cdn.yellowpageskenya.com/business-logo.png" alt="Avenue Motors Ltd"/>
                                                        </a>
                                        </div>
                    <div class="col-md-9 col-sm-9 col-xs-12 infoarea"> 
                                    <a itemprop="url" href={`/list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${descriptions}/${industry}/${address}/${location}/${auth?.currentUser?.uid}`}>
                                        <h2 itemprop="name" style={{fontSize: 20,fontWeight:400}} >{businessName}</h2> 
                                    </a> 
                    <span class="streetaddress" itemprop="address"> <a class="category" style={{color: "#000"}} title="Discover Car Hire in Car Hire" href={`list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${descriptions}/${industry}/${address}/${location}/${auth?.currentUser?.uid}`}>
                                                                        <i class="fas fa-location-arrow"></i></a> 
                                                                                            <a class="link" href={`/list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${descriptions}/${industry}/${address}/${location}/${auth?.currentUser?.uid}`} title="Car Hire in Avenue Motors premises opp Equity Bank, Moi Ave">{address}, {location}
                                                                                            </a> 
                                                                                        </span>
                                                                                        <div class="categorybiz"> 
                                                                                        <span>Category:</span> 
                                                                                        <a class="thecategory" data-value="1" data-business="Avenue Motors Ltd" data-catname="Car Hire" href={`/list-businesses-details/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${descriptions}/${industry}/${address}/${location}/${auth?.currentUser?.uid}`} title="Car Hire">{industry}
                                                                                        </a>
                                                                                    </div>
                                                                                    <div class="business-cta">
                                                                                          <a itemprop="telephone" title={`Call Now ${businessName}`} data-business="Avenue Motors Ltd" data-catname="Car Hire" data-value="8" href={`tel:${phone}`} class="biztelephone">Call now

                                                                                          </a> 
                                                                                          <a href={`/businesses-email/${postId}/${ownerUsername}/${phone}/${ownerEmail}/${ownerId}/${businessName}/${industry}/${auth?.currentUser?.uid}`} title={`send an email message to ${businessName}`} class="bizemail">Message</a> 
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                    </li>

                       
                                                                                        
                </ul> 
        </div>
    )
}

export default Posts
