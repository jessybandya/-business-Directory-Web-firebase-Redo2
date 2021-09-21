import React from 'react'
import Header from "../Header"
import Footer from "../Footer"
import './styles.css'
import { useParams } from 'react-router';

function About({user}) {
  let { uid } = useParams();

    return (
        <>
   <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-55 node-type-postel-pages section-postel" >
   <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation</a>
    </p>
             <Header uid={uid} className="sticky"/>
            <main style={{marginTop:70}}>
                            <h1 class="hidden" tyle={{display: "none"}}>{uid}</h1>
                             <section class="advertise-banner">
                               <div class="container-fluid">
                                 <div class="row">
                                   <div class="col-md-12 col-sm-12 col-xs-12 no_padding"> 
                                     <img class="lazyload" data-src="/sites/default/files/default_images/yellow-pages-default-banner-image.jpg" src="https://yellowpageskenya.com/sites/default/files/default_images/yellow-pages-default-banner-image.jpg" alt="advertise with yellow pages"/>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section class="quality-policy">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12 quality-options">
                                      <div class="row"> 
                                        <article>
                                          <h2>About Us</h2>
                                          <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                                            <div class="field-items">
                                              <div class="field-item even" property="content:encoded">
                                                <p>We are committed to being the market leader in directory publishing and related information services. We have a significant market share in the advertising industry in Kenya and provide quality products and services that are accurate, user-friendly, aesthetically attractive and available to all subscribers and advertisers on time every time.</p>
                                                <p>Kenya Postel Directories Limited was founded in 1991, as a joint venture between Telkom Kenya and Directel, a subsidiary of Portugal Telecom International. In our formative stages, we were the publisher of the official telephone, email, fax tourism guide books, but we have since diversified to offer the most comprehensive database in Kenya that can be accessed through the internet, mobile, and print platforms.</p>
                                                <p><strong>Our Vision </strong></p>
                                                <p>To offer the most comprehensive, affordable and innovative business contact solutions available in the world.</p>
                                                <p><strong>Our Mission</strong></p>
                                                <p>To connect businesses with their clients</p>
                                                <p><strong>Our Core Values</strong></p>
                                                <ul>
                                                  <li>Honesty and Integrity</li>
                                                  <li>Commitment to partners and staff</li>
                                                  <li>Teamwork</li><li>Quality</li>
                                                  <li>Creativity and Innovation</li>
                                                  <li>Efficiency</li>
                                                  <li>Flexibility and adaptability</li>
                                                  <li>Trust</li>
                                                  <li>Good governance and Fairness</li>
                                                  <li>Environmental Responsibility</li>
                                                </ul>
                                                <p><strong>Products and Services offered </strong></p>
                                                <ul>
                                                  <li>
                                                    <strong>Print Directories</strong><br />Every year, we publish the Nairobi, Coast and Inland editions of the Kenya Telephone Directory, the National Business and Daredream Directory for business and general users, and the Travel Discover Kenya for the tourism industry.
                                                  </li>
                                                    <li>
                                                      <strong>Online Directories</strong><br />Kenya Postel Directories Limited also publishes an Internet directory for all businesses and general users in Kenya. The key processes through which this is achieved include sales, design and development, production and credit control.<br />The design and development, uploading and publishing of the online directories follow established processes and procedures.
                                                    </li>
                                                  </ul>
                                                  <p> 

                                                  </p>
                                                  <p>
                                                     </p>
                                                  </div>
                                                </div>
                                              </div>
                                             </article>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section> 
                                  </main>
        </body>
                     <Footer/>
        </>
    )
}

export default About
