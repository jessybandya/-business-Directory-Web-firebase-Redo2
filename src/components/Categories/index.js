import React from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {Link} from "react-router-dom"
function Listclients() {
    return (
        <>
        <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header />

                        <div style={{marginTop:70,display: "flex",justifyContent: "space-between",padding: 10,flexWrap: "wrap",backgroundColor: "#F5F5F5"}}>
                       
                        <div>
                         <a  style={{color: "black"}} href="/car-hire">
                          Car-hire
                         </a>
                        </div>

                        <div>
                         <a style={{color: "black",marginLeft:10}} href="/restaurants">
                          Restaurants
                         </a>
                        </div>

                                                <div>
                         <a style={{color: "black",marginLeft:10}}  href="/schools">
                          Schools
                         </a>
                        </div>

                                                <div>
                         <a style={{color: "black",marginLeft:10}}  href="/auto-repairs">
                          Auto-Repairs
                         </a>
                        </div>

                                                 <div>
                         <a style={{color: "black",marginLeft:10}}  href="/hospitals">
                          Hospitals
                         </a>
                        </div>

                                                 <div>
                         <a style={{color: "black",marginLeft:10}}  href="/salons">
                          Salon
                         </a>
                        </div>
                        </div>


        </body>
                    <Footer />
    </>
    )
}

export default Listclients
