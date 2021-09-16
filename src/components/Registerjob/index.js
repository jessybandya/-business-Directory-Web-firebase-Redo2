import React,{useEffect} from 'react'
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {
  Spinner,Button,Container
} from 'reactstrap';
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import { useState } from "react"
import { useHistory } from 'react-router';
import { db,auth, storage } from '../firebase';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import FormSelect from './../forms/FormSelect';
import {Link, useParams} from 'react-router-dom';
import Myposts1 from '../Myposts1';

function Registerjob({user}) {
  const history = useHistory("");
  const { uid } = useParams();
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const [companyEmail,setCompanyEmail]=useState("")
  const [phoneCompany,setPhoneCompany]=useState("")
  const [web, setWebsite] = useState("")
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
if (!companyName.trim()) {
          errors.companyName = alert(`Company name is required!`)
    }else if(!role.trim()){
      errors.role = alert('Vacant position field is required');
  }else if (!image) {
      errors.image = alert('Logo image is required');
   }else if (!location) {
  errors.location = alert('Location is required');
}else if (!phoneCompany) {
  errors.phoneCompany = alert('Company Phone number is required');
}else if (!companyEmail) {
  errors.companyEmail = alert('Company email number is required');
}else if (!address) {
errors.address = alert('Address is required');
}else if (!descriptions) {
errors.descriptions = alert('Role requirement descriptions are required');
}else if (!web) {
  errors.web = alert("Company's Website link required");
  }else{
if (imageURL == '') {
  db.collection('businesses').add({
    //


}).then(ref => alert("Added successfully"))

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
                    businessName:role,
                    companyName,
                    logo:url,
                    phoneCompany,
                    companyEmail,
                    address,
                    descriptions,
                    location,
                    web,
                    type:"job",
                    industry:"job",
                    ownerUsername:auth?.currentUser?.displayName,
                    ownerEmail:auth?.currentUser?.email,
                    ownerphotoURL:auth?.currentUser?.photoURL,
                   location
                  }).then(ref => alert("Added successfully"));

                  setProgress(0);                  

              })
      }
  )
}


 }

}
  
const addJob = () =>{

  alert("You added")
}
    return (
        <>
        <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header />


                        {/* type="button" className="btn btn-primary"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"  data-toggle="" style={{ marginLeft : '30px', marginTop : '10px', marginBottom : '10px' }} */}
        <div style={{marginTop: 70}}>
        <div>
          {/* <Container> */}
          <button  type="button" style={{ marginLeft : '30px', marginTop : '10px', marginBottom : '10px',border: "2px solid #00BFFF" }}  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
          <i className="fa fa-plus-square"> Add Job</i>

          </button>

        
        <div style={{backgroundColor: "#00BFFF"}}  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div  class="modal-dialog" role="document">
    <div style={{background: "#fff",maxWidth: "100%"}} class="modal-content">
        <div class="modal-header">
        <h5 style={{color: "black"}} class="modal-title" id="exampleModalLabel">Post Job</h5>
        <button style={{color: "#00BFFF"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style={{color: "#00BFFF"}} aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <br></br>
        <Form id="updateCompany" method="post">
        <FormGroup>
      <Input type="text" name="name" id="name"  placeholder="Enter company name"
      onChange={(e) => {
        setCompanyName(e.target.value)
    }}
     required/>
    </FormGroup>
    <FormGroup>
      <Input type="text" name="name" id="name"
        placeholder="Vacant position/role" 
        onChange={(e) => {
          setRole(e.target.value)
      }}
        required/>
    </FormGroup>
    <FormGroup>
    <Label style={{color: "#888888"}}>Company Logo</Label>
    <Input type="file" name="logo" id="logo" onChange={handleChange} placeholder="Enter company Logo" required/>
    </FormGroup>
    <FormGroup>
    <Label style={{color: "#888888"}} for="location">Location from Google</Label>

<GooglePlacesAutocomplete
      apiKey="AIzaSyDb8HjXItzxXeuc9lZo99ArryGY03MVtzI"
    />
    {/* <Input type="text" name="location" id="location" placeholder="Enter your location" required/> */}
    </FormGroup>
    <FormGroup>
    <FormSelect style={{color: "#555"}}
                        
                        
                         
                         options={[{
                           value: "",
                           name: "County"
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
    <input required="required" 
                      onChange={(e) => {
                        setPhoneCompany(e.target.value)
                    }}
                      placeholder="Phone number to be contacted" class="form-control form-text required" type="text" id="edit-submitted-contact-person-name" name="submitted[contact_person_name]"  size="60" maxlength="128" />
    </FormGroup>
    <FormGroup>
    <input required="required" 
                      onChange={(e) => {
                        setCompanyEmail(e.target.value)
                    }}
                      placeholder="Email for the company to be contacted" class="form-control form-text required" type="text" id="edit-submitted-contact-person-name" name="submitted[contact_person_name]"  size="60" maxlength="128" />
    </FormGroup>
    <FormGroup>
    <input required="required" 
                      onChange={(e) => {
                        setAddress(e.target.value)
                    }}
                      placeholder="Address road/streets plus the build(Including the floor if there)..." class="form-control form-text required" type="text" id="edit-submitted-contact-person-name" name="submitted[contact_person_name]"  size="60" maxlength="128" />
    </FormGroup>
    <FormGroup>
    <Input type="textarea" name="description" id="description" onChange={(e) => {
                        setDescriptions(e.target.value)
                    }} placeholder="Requirements for the position." required/>
    </FormGroup>
    <FormGroup>
    <Input type="textarea" name="description" id="description" onChange={(e) => {
                        setWebsite(e.target.value)
                    }} placeholder="Add Company Website link" required/>
    </FormGroup>
    <Button onClick={addBusiness} style={{backgroundColor: "#00BFFF",color: "#fff"}}  className='button_login '>Submit</Button>
</Form>
        </div>
      </div>
      </div>
      </div>



    
    <React.Fragment>
    
     <Myposts1 uid={uid} /> 


    {/* update modal */}


  
  <Modal >
     <React.Fragment> 
    <ModalHeader>EDIT COMPANY</ModalHeader>
    <ModalBody>
    <br></br>
    <Form id="update" method="post">
    <FormGroup>
   <Label for="name">Name</Label>
  <Input type="text" name="name" id="name" placeholder="Enter your name" required/>
</FormGroup>
<FormGroup>
<Label for="logo">Logo</Label>
<Input type="file" name="logo" id="logo" placeholder="Enter your Logo" />
</FormGroup>
<FormGroup>
<Label for="location">Location</Label>
<Input type="text" name="location" id="location"  placeholder="Enter your location" required/>
</FormGroup>
<FormGroup>
<Label for="description">Description</Label>
<Input type="textarea" name="description" id="description"  placeholder="Enter your company description" required/>
</FormGroup>
<Button className='button_login bg-success'>Submit</Button>
</Form>
    </ModalBody>
    </React.Fragment> 
  </Modal>

  </React.Fragment>


{/* </Container> */}
 </div>



                
        </div>
        </body>
                    <Footer />
    </>
    )
}

export default Registerjob
