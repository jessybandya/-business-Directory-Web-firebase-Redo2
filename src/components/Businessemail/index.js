import React,{useState,useEffect} from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {auth,db} from './../firebase';
import { useParams,useHistory, Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';


function Businessemail({user}) {

        const history = useHistory("");
        const { postId, name, phone, email, ownerId,businessName, category,uid} = useParams();
        const [name1, setName1] = useState("");
        const [phone1, setPhone1] = useState("");
        const [email1, setEmail1] = useState("");
        const [subject, setSubject] = useState("");
        const [text, setText] = useState("");

        if(!user){
                history.push("/login-client");
        }
        const sendText = (event) => {
                event.preventDefault();
                let errors = {};
                if (!name1.trim()) {
                        errors.name1 = alert(`Full name is required!`)
                  }else if(!phone1.trim()){
                        errors.phone1 = alert('Phone number is required');
                }else if(!email1.trim()){
                        errors.email1 = alert('Email is required');
                }else if(!subject.trim()){
                        errors.subject = alert('Subject is required');
                }else if(!text.trim()){
                        errors.text = alert("You can't send a text with an empty message field");
                }else if(email1 !== auth?.currentUser?.email){
                        errors.email1 = alert("Email is not matching with current User");
                }else{
                        db.collection('messages').add({
                              timestamp:  Date.now(),
                              toId: ownerId,
                              fromId: auth?.currentUser?.uid,
                              name:name1,
                              phone: phone1,
                              email:email1,
                              subject:subject,
                              businessName,
                              text:text,
                              category,
                              fromUsername:auth?.currentUser?.displayName,
                              fromEmail:auth?.currentUser?.email,
                              fromphotoURL:auth?.currentUser?.photoURL,
                              read:false
                          
                            }).then(ref => alert("Message been sent successfully"))
                }

        }

    return (
        <>
        <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header uid={uid}/>

        <div>
                <main style={{marginTop:70}}> 
                                <section class="single-business-timeline" data-value="1" data-business="Wairimu Car Hire" data-catname="Car Hire">
                                        <div class="container-fluid timelinephoto"><div class="container business-heading">
                                                <div class="row"><div class="col-md-8 col-sm-8 col-xs-12 biz-name"><div class="row">
                                                        <div class="col-md-3 col-sm-3 col-xs-12 cover-logo"> 
                                                                <img width="auto" class="lazyload" src="https://cdn.yellowpageskenya.com/business-logo.png" alt="Wairimu Car Hire"/>
                                                        </div>
                                                        
                                                        <div class="col-md-9 col-sm-9 col-xs-12 biz-heading">
                                                                <h1>Send Message to {name}</h1>
                                                                <h2><small>{businessName}</small></h2>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-12 biz-buttons">
                                                <div  class="row">
                                                        <div style={{display: "flex",justifyContent: "center",alignContent: "center",alignItems: "center"}} class="col-md-12 col-sm-12 col-xs-12 website"> 
                                                <div>
                                                <Link style={{color: "black"}} to={`/list-businesses-details/${postId}/${name}/${phone}/${email}/${ownerId}`} target="_blank">View All Details
                                                        </Link> 
                                                </div>

                                                        <div>
                                                                <SendIcon />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</section>
<section class="advertise-content business-email">
        <div class="container">
                <div class="row">
                        <div class="col-md-8 col-sm-9 col-xs-12 advertise-lead-form">
                                <div class="typically-reply">
                                        <p>
                                                <i class="fas fa-clock"></i> Typically replies within a few days
                                        </p>
                                </div>
                                <div class="business-preffers">
                                        <ul>
                                                <li>This business might prefer a phone call.</li>
                                                <li class="dropdown"> <a href="#" class="dropdown-toggle" id="phonenumberdropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phone Numbers

                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="phonenumberdropdown">

                                                </div>
                                        </li>
                                </ul>
                        </div>
                        <form class="webform-client-form webform-client-form-39" action="https://yellowpageskenya.com/business-email/car-hire/2799240-wairimu-car-hire" method="post" id="webform-client-form-39" accept-charset="UTF-8">
                                <div>
                                        <div class="webform-progressbar">

                                        </div>
                                <div class="input-group mb-3 form-item webform-component webform-component-textfield webform-component--full-names"> 
                                        <label class="element-invisible" for="edit-submitted-full-names">Full Names 
                                                <span class="form-required" title="This field is required.">*</span>
                                        </label> 
                                        <input required="required" 
                                                onChange={(e) => {
                                                        setName1(e.target.value)
                                                    }}
                                        placeholder="Your Full Names" class="form-control form-text required" type="text" id="edit-submitted-full-names" name="submitted[full_names]" size="60" maxlength="128" />
                                </div>
                                <div class="input-group mb-3 form-item webform-component webform-component-textfield webform-component--phone-number"> 
                                        <label class="element-invisible" for="edit-submitted-phone-number">Phone Number 
                                                <span class="form-required" title="This field is required.">*</span>
                                        </label> 
                                        <input required="required"
                                                onChange={(e) => {
                                                        setPhone1(e.target.value)
                                                    }} 
                                        placeholder="Your Mobile Number" class="form-control form-text required" type="text" id="edit-submitted-phone-number" name="submitted[phone_number]"  size="60" maxlength="128" />
                                </div>
                                <div class="input-group mb-3 form-item webform-component webform-component-email webform-component--your-email"> 
                                        <label class="element-invisible" for="edit-submitted-your-email">Your Email 
                                                <span class="form-required" title="This field is required.">*</span>
                                        </label> 
                                        <input required="required" class="email form-control form-text form-email required" 
                                                onChange={(e) => {
                                                        setEmail1(e.target.value)
                                                    }}
                                        placeholder="Your Email" type="email" id="edit-submitted-your-email" name="submitted[your_email]" size="60" />
                                </div>
                                <div class="input-group mb-3 form-item webform-component webform-component-textfield webform-component--subject"> 
                                        <label class="element-invisible" for="edit-submitted-subject">Subject 
                                                <span class="form-required" title="This field is required.">*</span>
                                        </label> 
                                        <input required="required"
                                                onChange={(e) => {
                                                        setSubject(e.target.value)
                                                    }}
                                         placeholder="Subject" class="form-control form-text required" type="text" id="edit-submitted-subject" name="submitted[subject]"  size="60" maxlength="128" />
                                </div>
                                <div class="input-group mb-3 form-item webform-component webform-component-textarea webform-component--message"> 
                                        <label class="element-invisible" for="edit-submitted-message">Message 
                                                <span class="form-required" title="This field is required.">*</span>
                                        </label>
                                        <div class="form-textarea-wrapper resizable">
                                                <textarea required="required" 
                                                        onChange={(e) => {
                                                                setText(e.target.value)
                                                            }}
                                                placeholder="Your Message" class="form-control form-textarea required" id="edit-submitted-message" name="submitted[message]" cols="60" rows="5"></textarea>
                                        </div>
                                </div>
                                <input type="hidden" name="details[sid]" />
                                <input type="hidden" name="details[page_num]" value="1" />
                                <input type="hidden" name="details[page_count]" value="1" />
                                <input type="hidden" name="details[finished]" value="0" />
                                <input type="hidden" name="form_build_id" value="form-4lpP200stxr4sYqlEjoMMvUYu8kHUDlovTSzRk9gPG4" />
                                <input type="hidden" name="form_id" value="webform_client_form_39" />
                                <input type="hidden" name="honeypot_time" value="1629111558|Rr_8QoGYTSRoyjxX_7-MJf4NgpKNyyT917CHJfRbND8" />
                                <div class="webform-steps-buttons element-invisible form-wrapper" id="edit-step-buttons">
                                        <input class="element-invisible form-submit" type="submit" name="op" value="Submit" />
                                        <input class="step-button form-submit form-button-disabled" disabled="disabled" type="submit" id="edit-0" name="step-btn" value="Start" />
                                        <input class="step-button form-submit" type="submit" id="edit-1" name="step-btn" value="Complete" />
                                </div>


                                        <div class="form-actions">
                                                <input class="webform-submit button-primary form-submit" onClick={sendText} type="submit" name="op" value="Submit" />
                                        </div>
                                </div>
                        </form>
                </div>
        </div>
</div>
</section>
<div class="container">
                                                                        <div class="row">
                                                                                <div class="col-md-12 col-sm-12 col-xs-12 social share-btns">
                                                                                        <h2 class="block__title">Share This</h2>
                                                                                        <div class="social-share-links inline">
                                                                                                <span class="share-link share-email">
                                                                                                        <a href="gmail.com" class="btn btn-info btn-xs">
                                                                                                               
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
        </main>
        </div>
        </body>
                    <Footer />
    </>
    )
}

export default Businessemail
