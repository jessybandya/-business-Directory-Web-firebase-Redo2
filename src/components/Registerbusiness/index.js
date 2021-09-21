import React,{useState,useEffect} from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {storage,auth,db} from './../firebase';
import { useHistory, Link,useParams } from 'react-router-dom';
import FormSelect from './../forms/FormSelect';

function Registerbusiness({user}) {
  const history = useHistory("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState('');
  let { uid } = useParams();


  if(!user){
    history.push("/login-client");
}

  const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
    setImageURL(URL.createObjectURL(e.target.files[0]));
};

const uploadFileWithClick = () => {
    document.getElementsByClassName('four')[0].click();
}

  const addBusiness = (event) => {
    event.preventDefault();
    let errors = {};
if (!businessName.trim()) {
            errors.businessName = alert(`Business name is required!`)
      }else if(!industry.trim()){
        errors.industry = alert('Industry is required');
    }else if (!image) {
        errors.image = alert('Image is required');
     }else if (!phone) {
      errors.phone = alert('Phone Number is required');
   }else if (!location) {
    errors.location = alert('Location is required');
 }else if (!address) {
  errors.address = alert('Business address is required');
}else if (!descriptions) {
  errors.descriptions = alert('Business description is required');
}else{
  if (imageURL == '') {
    db.collection('businesses').add({
      //
    timestamp:  Date.now(),
    ownerId: auth?.currentUser?.uid,
    businessName,
    industry,
    postImage: "",
    address,
    descriptions,
    phone,
    ownerUsername:auth?.currentUser?.displayName,
    ownerEmail:auth?.currentUser?.email,
    ownerphotoURL:auth?.currentUser?.photoURL,
   location

  }).then(ref => alert("Business Added successfully"))

  setProgress(0);

  }else{
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        (error) => {
            console.log(error);
            alert(error.message);
        },
        () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("businesses").add({
                      timestamp:  Date.now(),
                      ownerId: auth?.currentUser?.uid,
                      businessName,
                      industry,
                      postImage: url,
                      address,
                      type:"business",
                      descriptions,
                      phone,
                      ownerUsername:auth?.currentUser?.displayName,
                      ownerEmail:auth?.currentUser?.email,
                      ownerphotoURL:auth?.currentUser?.photoURL,
                     location
                    }).then(ref => alert("Business Added successfully"));

                    setProgress(0);                  

                })
        }
    )
  }


   }

  }
    return (
        <div>
            <div>
            <Header uid={uid}/>

            <section  class="advertise-banner">
        <div class="container-fluid">
          <div  class="row">
            <div style={{marginTop:70}} class="col-md-12 col-sm-12 col-xs-12 no_padding" > 
        <img style={{marginTop:70}} class="lazyload" src="https://yellowpageskenya.com/sites/default/files/yellow%20pages%20default%20banner%20image.jpg" alt="Advertise With Us"/>
      </div>
    </div>
  </div>
</section>

            <main >
        <h1 class="hidden" style={{display: "none"}}>Advertise With Us</h1>
         <section class="advertise-content">
           <div class="container">
             <div class="row">
               <div class="col-md-8 col-sm-8 col-xs-12 advertise-options products">
                 <div class="row"><div class="product">
                   <div class="col-md-6 col-sm-6 col-xs-12 img yellowprint-img"> 
                     <img src="#" class="lazyload" src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/03/Consulting-Templates-Blog-Header.jpg" alt="Yellow Pages Digital"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 copy yellowprint-copy ">
                      <h3>Yellow Pages Digital</h3><p>In our evolution, our directory has found a home online and in the hands of every individual with internet access. Yellow Pages directory can now be found by even more people, wherever they are. Our advantage is that we have every corner of Kenya on our fingertips and our clients have access to that.</p>
                      <p>Get listed on our online platforms and be at your client’s fingertips.</p>
                    </div>
                  </div>
                  <div class="product">
                    <div class="col-md-6 col-sm-6 col-xs-12 img yellowprint-img"> 
                      <img src="#" class="lazyload" src="https://thumbs.dreamstime.com/b/email-marketing-concept-blue-background-advertising-campaign-envelope-business-icons-newsletter-design-banner-web-119731845.jpg" alt="Yellow Pages Planet (YP Planet)"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 copy yellowprint-copy ">
                      <h3>Yellow Pages Planet (YP Planet)</h3>
                      <p>We offer marketing communication solutions for all. No business is too small to enjoy the benefits of robust digital communication solutions.</p>
                      <p>Our offering includes; Website Development, Search Engine Optimization, Social Media Management, Content Creation, Geofencing, Lead Creation, Email Marketing and Search Engine Marketing.</p>
                      <p>Talk to us to bring life to your brand online.</p>
                    </div>
                  </div>
                  <div class="product">
                    <div class="col-md-6 col-sm-6 col-xs-12 img yellowprint-img"> 
                      <img src="#" class="lazyload" src="https://iskcononline.com/wp-content/uploads/2018/04/ultimate-guide-to-background-images-in-email.png" alt="Yellow Pages Print"/>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 copy yellowprint-copy ">
                      <h3>Yellow Pages Print</h3>
                      <p>Get listed on the directory that knows the ins and outs of Kenya. Join millions of businesses listed in the Yellow Pages and be seen by millions of people looking for businesses like yours.</p>
                      <p>Since 1992, we have made it easier for businesses in all sectors to be found, we’ve connected them to clients flipping through the pages of our directory. Your business could be within those pages too. Talk to us today.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12 advertise-lead-form">
                <h1>List your business today. It’s quick &amp; easy!</h1>
                <form class="webform-client-form webform-client-form-43" action="https://yellowpageskenya.com/advertise-us-list-your-business-today-it-quick-and-easy" method="post" id="webform-client-form-43" accept-charset="UTF-8">
                  <div>
                    <div class="webform-progressbar">

                    </div>
                    <div class="form-group form-item webform-component webform-component-textfield webform-component--business-name"> 
                      <label for="edit-submitted-business-name">Business Name <span class="form-required" title="This field is required.">*</span></label> 
                      <input required="required" 
                      onChange={(e) => {
                        setBusinessName(e.target.value)
                    }}
                      placeholder="Business Name" class="form-control form-text required" type="text" id="edit-submitted-business-name" name="submitted[business_name]"  size="60" maxlength="128" />
                    </div>
                    <div class="form-group form-item webform-component webform-component-textarea webform-component--industry"> 
                      <label for="edit-submitted-industry">Description <span class="form-required" title="This field is required.">*</span></label>
                      <div class="form-textarea-wrapper resizable">
                        <textarea required="required" 
                        onChange={(e) => {
                          setDescriptions(e.target.value)
                      }}
                        placeholder="Write alittle about your business..." class="form-control form-textarea required" id="edit-submitted-industry" name="submitted[industry]" cols="60" rows="5"></textarea>
                      </div>
                    </div>
                    <div class="form-group form-item webform-component webform-component-textfield webform-component--contact-person-name inputForUpload"> 
                      <label for="edit-submitted-contact-person-name">
                        <button style={{border: "none",cursor: "pointer"}}>Upload Image</button></label> 

                      <input  onChange={handleChange} type="file" accept="image/*" className='four' />
                      <div class={`card-img-top navbar-brand previewImage ${!image && "vanish"}`}>
                        <img class="card-img-top navbar-brand previewImaage" style={{height:150,width:150,objectFit: "cover"}} src={imageURL} className="" />
                    </div>
                    </div>
                    <div style={{display: "flex",color: "#555"}}>
                    <FormSelect style={{color: "#555"}}
                        
                        
                        label="Category(Industry)"
                         
                         options={[{
                           value: "",
                           name: ""
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
                         onChange={(e) => setIndustry(e.target.value)} type="text" 
                       />                                 
                     
                               </div>





                    <div style={{display: "flex",color: "#555"}}>
                    <FormSelect style={{color: "#555"}}
                        
                        
             label="Location(County)"
              
              options={[{
                value: "",
                name: ""
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
                      
          
                    </div>
                    <div class="form-group form-item webform-component webform-component-textfield webform-component--contact-person-name"> 
                      <label for="edit-submitted-contact-person-name">Adress<span class="form-required" title="This field is required.">*</span></label> 
                      <input required="required" 
                      onChange={(e) => {
                        setAddress(e.target.value)
                    }}
                      placeholder="Write roads and streets..." class="form-control form-text required" type="text" id="edit-submitted-contact-person-name" name="submitted[contact_person_name]"  size="60" maxlength="128" />
                    </div>
                    <div class="form-group form-item webform-component webform-component-textfield webform-component--phone-number"> 
                      <label for="edit-submitted-phone-number">Phone Number <span class="form-required" title="This field is required.">*</span></label> 
                      <input required="required"
                      onChange={(e) => {
                        setPhone(e.target.value)
                    }} 
                      placeholder="Phone Number" class="form-control form-text required" type="text" id="edit-submitted-phone-number" name="submitted[phone_number]"  size="60" maxlength="128" />
                    </div>
                   
                   
                    
                    <div class="captcha">
                      <input type="hidden" name="captcha_sid" value="86276914" />
                      <input type="hidden" name="captcha_token" value="40f82fca410c1589745a4262ee950c67" />
                      <input type="hidden" name="captcha_response" value="Google no captcha" />
                      <div class="g-recaptcha" data-sitekey="6Lfaxb8UAAAAAPDinJkTbohitkxlbPwtnnAG4jc1" data-theme="dark" data-type="image">

                      </div>
                      <noscript>
                        <div style={{width: 302,height:352}}>
                          <div style={{width: 302,height:352,position: "relative"}}>
                            <div  style={{width: 302,height:352,position: "absolute"}}>
                              <iframe src="https://www.google.com/recaptcha/api/fallback?k=6Lfaxb8UAAAAAPDinJkTbohitkxlbPwtnnAG4jc1&amp;hl=en" frameborder="0" scrolling="no" style={{width:302,height:352,borderStyle: "none"}}>
                              </iframe>
                            </div>
                            <div style={{width: 250,height:80,position: "absolute",borderStyle: "none",bottom: 21,left: 25,margin: 0,padding: 0,right:25}}>
        <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{width: 250,height:80,border: "1px solid #c1c1c1",margin: 0,padding: 0,resize: "none"}}  value="">
        </textarea>
      </div>
    </div>
  </div>
</noscript>
</div>
<div class="form-actions">
<progress value={progress} className="hidden" max="100" />
  <input class="webform-submit button-primary form-submit" onClick={addBusiness} type="submit" name="op" value="Submit" />
</div>
</div>
</form>
</div>
</div>
</div>
</section> 
</main>
            </div>
            <Footer />
        </div>
    )
}

export default Registerbusiness
