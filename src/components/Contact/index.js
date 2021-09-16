import React from 'react'
import logo from "../../images/design2.png"
import './styles.css'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../Footer';
import Header from '../Header';

import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';


function Contact() {
    return (
        <>
<body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>

    
   <Header />


               <main style={{marginTop:70}}>
          <h1 class="hidden" style={{display: "none"}}>Contact Us</h1> 
          <section class="contact-us">
            <div class="container-fluid">
              <div class="row">
                <iframe class="lazyload" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2096348913227!2d36.81063008948405!3d-1.2697973472965298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d732b35825%3A0x6f681268cd87a01c!2sKenya%20Postel%20Directories!5e0!3m2!1sen!2ske!4v1566891582708!5m2!1sen!2ske" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen="">
                </iframe>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12 contact-details">
                  <div class="row">
                    <div class="col-md-9 col-sm-9 col-xs-9 telephone"> 
                      <span><PhoneEnabledIcon/></span>
                      <p>Main Telephone: <a href='tel:(+254) 020 7800 701'>(+254) 020 7800 701</a></p>
                      <p>Telephone: <a href='tel:(+254) 20 275 1000'>(+254) 20 275 1000</a></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-9 col-sm-9 col-xs-9 open-time">
                       <span><i class="far fa-clock"></i></span>
                       <p>Monday-Friday: 8:00 AM - 5:00 PM</p>
                       <p>Saturday: Closed</p><p>Sunday: Closed</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-9 col-sm-9 col-xs-9 email"> 
                        <span><EmailIcon /></span>
                        <p>Email: <a href="mailto:hr@yellowpageskenya.com">hr@daredreamkenya.com</a></p>
                        <p>Marketing Email: <a href="mailto:info@yellowpageskenya.com">info@daredreamkenya.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8 col-sm-8 col-xs-12 contact-form">
                    <div class="contact-form-inner">
                      <h3>Get in touch with us</h3>
                      <div id="webform-ajax-wrapper-45">
                        <form class="webform-client-form webform-client-form-45" action="https://yellowpageskenya.com/contact-us-we-value-your-feedback-we-listen-you" method="post" id="webform-client-form-45" accept-charset="UTF-8">
                          <div>
                            <div class="webform-progressbar">

                            </div>
                            <fieldset class="webform-component-fieldset form-row webform-component--wrapper form-wrapper">
                              <div class="fieldset-wrapper">
                                <div class="form-group col-md-6 form-item webform-component webform-component-textfield webform-component--wrapper--name"> 
                                  <label for="edit-submitted-wrapper-name">Name <span class="form-required" title="This field is required.">*</span>
                                  </label> 
                                  <input required="required" placeholder="Your Name" class="form-control form-text required" type="text" id="edit-submitted-wrapper-name" name="submitted[wrapper][name]" value="" size="60" maxlength="128" />
                                </div>
                                <div class="form-group col-md-6 form-item webform-component webform-component-email webform-component--wrapper--email">
                                   <label for="edit-submitted-wrapper-email">Email <span class="form-required" title="This field is required.">*</span></label> 
                                   <input required="required" class="email form-control form-text form-email required" placeholder="Email Address" type="email" id="edit-submitted-wrapper-email" name="submitted[wrapper][email]" size="60" />
                                  </div>
                                  <div class="form-group col-md-6 form-item webform-component webform-component-textfield webform-component--wrapper--mobile-phone"> 
                                    <label for="edit-submitted-wrapper-mobile-phone">Mobile Phone <span class="form-required" title="This field is required.">*</span></label> 
                                    <input required="required" placeholder="Mobile Phone" class="form-control form-text required" type="text" id="edit-submitted-wrapper-mobile-phone" name="submitted[wrapper][mobile_phone]" value="" size="60" maxlength="128" />
                                  </div>
                                  <div class="form-group col-md-6 form-item webform-component webform-component-textfield webform-component--wrapper--subject"> 
                                    <label for="edit-submitted-wrapper-subject">Subject <span class="form-required" title="This field is required.">*</span></label> 
                                    <input required="required" placeholder="Subject" class="form-control form-text required" type="text" id="edit-submitted-wrapper-subject" name="submitted[wrapper][subject]" value="" size="60" maxlength="128" />
                                  </div>
                                  <div class="form-group col-md-12 form-item webform-component webform-component-textarea webform-component--wrapper--message"> 
                                    <label for="edit-submitted-wrapper-message">Message <span class="form-required" title="This field is required.">*</span></label>
                                    <div class="form-textarea-wrapper resizable">
                                      <textarea required="required" class="form-control form-textarea required" id="edit-submitted-wrapper-message" name="submitted[wrapper][message]" cols="60" rows="5"></textarea>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                              <div class="webform-steps-buttons element-invisible form-wrapper" id="edit-step-buttons">
                              </div>
                              <div class="email-textfield">
                                <div class="form-item form-type-textfield form-item-email"> 
                                </div>
                              </div>
                              <div class="captcha">
                                
                                <div class="g-recaptcha" data-sitekey="6Lfaxb8UAAAAAPDinJkTbohitkxlbPwtnnAG4jc1" data-theme="dark" data-type="image">
                                </div>
                                
</div>
<div class="form-actions">
  <input class="webform-submit button-primary form-submit" type="submit" id="edit-submit--2" name="op" value="Submit" />
</div>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="row websites">
  <div class="col-sm-4 col-md-4 col-xs-12 travel-discover"> 
    <a rel="noopener noreferrer" href="https://traveldiscoverkenya.com/" target="_blank"> 
      <img src="https://yellowpageskenya.com/sites/all/themes/yp/images/tdk_logo.jpg" alt="Travel discover kenya"/>
      <p>Travel Discover Kenya</p> 
    </a>
  </div>
  <div class="col-sm-4 col-md-4 col-xs-12 hangout"> 
    <a href="https://hangout.co.ke/" target="_blank" rel="noopener noreferrer"> 
      <img src="https://yellowpageskenya.com/sites/all/themes/yp/images/hangoutlogo.jpg" alt="Hangout Kenya"/><p>Hangout Kenya</p> 
    </a>
  </div>
  <div class="col-sm-4 col-md-4 col-xs-12 yellow-link"> 
    <a href="https://blog.yellowpageskenya.com/" target="_blank" rel="noopener noreferrer" > 
      <img src={logo} alt="yellowpages Kenya blog"/><p>Blue Pages Kenya Blog</p> 
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

export default Contact
