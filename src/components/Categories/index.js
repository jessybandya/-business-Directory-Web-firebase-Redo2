import React,{useState,useEffect} from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {Link,useParams} from "react-router-dom"
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import FormSelect from './../forms/FormSelect';
import { auth } from '../firebase'

function Listclients() {
  const [businessCategory, setBusinessCategory] = useState("")
  let { uid } = useParams();

    return (
        <>
        <body style={{marginBottom:20}} class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header uid={uid}/>

                        <main style={{marginTop:70}}>
                       
                        <section data-cat="" class="" itemscope itemtype="https://schema.org/ItemList https://schema.org/LocalBusiness">
                        <div  class="container">
                                    <div  class="">
                                        <div class="">                                               

                                                        
<section class="results-shown">                                                            

<Form inline className="Search-header">

       <div style={{display: "flex",alignItems: "center",marginTop:50}}>
       

       <FormGroup>
 

      <FormSelect  style={{color: "#555",border: "1px solid #888888",borderRadius: 5}}
                        
                        
                         
                        options={[{
                          value: "",
                          name: "browse all business categories"
                        },
                              {
                                value: "car-hire",
                                name: "Car Hire"
                              }, {
                                value: "restaurant",
                                name: "Restaurants"
                              }, {
                                value: "school",
                                name: "Schools"
                              }, {
                                value: "auto-repair",
                                name: "Auto Repair"
                              }, {
                                value: "Hospital",
                                name: "Hospitals"
                              }, {
                               value: "salon",
                               name: "Salons"
                             }, {
                              value: "job",
                              name: "Jobs"
                            }]} 
                        required=""             
                        onChange={(e) => setBusinessCategory(e.target.value)} type="text" 
                      />



      
      </FormGroup>
      <FormGroup>
      <p className="card-text"><small className="text-muted">Find category</small></p>

      </FormGroup>
       </div>
      
    </Form>
    {businessCategory === "" &&(
   <div style={{display: "flex",flexWrap: "wrap",flexDirection: "row"}}>
     {!auth?.currentUser?.uid &&(
     <a href="/car-hire">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Car hire</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/car-hire1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Car hire</span></button>
     </a>
     )}


          {!auth?.currentUser?.uid &&(
     <a href="/restaurants">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Restaurants</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/restaurants1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Restaurants</span></button>
     </a>
     )}



{!auth?.currentUser?.uid &&(
     <a href="/schools">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Schools</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/schools1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Schools</span></button>
     </a>
     )}



{!auth?.currentUser?.uid &&(
     <a href="/auto-repairs">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Auto Repairs</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/auto-repairs1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Auto Repairs</span></button>
     </a>
     )}



{!auth?.currentUser?.uid &&(
     <a href="/hospitals">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Hospitals</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/hospitals1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Hospitals Repairs</span></button>
     </a>
     )}


{!auth?.currentUser?.uid &&(
     <a href="/salons">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Salons</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/salons1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Salons</span></button>
     </a>
     )}


{!auth?.currentUser?.uid &&(
     <a href="/list-jobs">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Jobs</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/list-jobs1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Jobs</span></button>
     </a>
     )}
 </div>
    )}

    





    {/* Single categories */}
        {businessCategory === "auto-repair" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/auto-repairs">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Auto Repairs</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/auto-repairs1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Auto Repairs</span></button>
     </a>
     )}
 </div>
    )}

{businessCategory === "car-hire" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/car-hire">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Car hire</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/car-hire1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Car hire</span></button>
     </a>
     )}
 </div>
    )}    
{businessCategory === "restaurant" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/restaurants">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Restaurants</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/restaurants1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Restaurants</span></button>
     </a>
     )}
 </div>
    )}  

{businessCategory === "school" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/schools">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Schools</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/schools1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Schools</span></button>
     </a>
     )}
 </div>
    )}  

{businessCategory === "Hospital" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/hospitals">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Hospitals</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/hospitals1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Hospitals</span></button>
     </a>
     )}
 </div>
    )} 

{businessCategory === "salon" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/salons">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Salons</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/salons1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-5"><span style={{fontSize:13,fontWeight:"900"}}>Salons</span></button>
     </a>
     )}
 </div>
    )} 

{businessCategory === "job" &&(
   <div>
     
     {!auth?.currentUser?.uid &&(
     <a href="/list-jobs">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Jobs</span></button>
     </a>
     )}
          {auth?.currentUser?.uid &&(
     <a href={`/list-jobs1/${auth?.currentUser?.uid}`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>Jobs</span></button>
     </a>
     )}
 </div>
    )} 
                                
     </section>  
                                                                           
                                                                           
                                         </div>  
                                    </div>                            
                          

                </div>                            
                </section>
                        {/* <div>
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
                        </div> */}
                        </main>


        </body>
                    <Footer />
    </>
    )
}

export default Listclients
