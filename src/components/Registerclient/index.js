import React, {useState}  from 'react';
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import GoogleButton from 'react-google-button'
import {auth,db} from './../firebase';
import { useHistory, Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import GoogleLogin from "./../Googlelogin";


function Registerclient() {

  const history = useHistory("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = (event) => {
    event.preventDefault();
    let errors = {};
if (!username.trim()) {
            errors.username = alert(`Username is required!`)
      }else if(!email.trim()){
        errors.email = alert('Email is required');
    }else if (!/\S+@\S+\.\S+/.test(email)) {
     errors.email = alert('Email address is invalid');
      }else if (!password) {
        errors.password = alert('Password is required');
     }else if (password.length < 6) {
      errors.password = alert('Password needs to be 6 characters or more');
   }else{
    db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {

      // resultSnapShot is an array of docs where "email" === "user_mail"

      if (resultSnapShot.size == 0) {
          //Proceed

          auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              if (auth.user) {
                  auth.user.updateProfile({
                      displayName: username,
                      photoURL: "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"
                  }).then((s) => {
                      db.collection('users').doc(auth.user.uid).set({
                          uid: auth.user.uid,
                          displayName: username,
                          email: auth.user.email,
                          photoURL: "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg",
                          read: true,
                          timestamp: Date.now()
                      })
                          .then((r) => {
                              history.push("/")
                          })
                  })
              }
          })
          .catch((e) => {
              if (
                  e.message ===
                  alert(e.message)
              ) {
                  alert("Please check your credentials again");
              } else if (
                  e.message ===
                  alert(e.message)
              ) {
                  history.push("/register-client");
                  window.scrollTo({
                      top: document.body.scrollHeight,
                      left: 0,
                      behavior: "smooth",
                  });
              }
          });

      } else {
          //Already registered
          alert("The email you enterd already in use")
      }

  })
   }
  }

    return (
        <div>
            <div>
            <Header />
            <div  className="register">
      {/* <span style={{marginTop:70}} className="registerTitle">Client form</span> */}
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text"
         onChange={(e) => {
          setUsername(e.target.value)
      }}
        placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" 
        onChange={(e) => {
          setEmail(e.target.value)
      }}
        placeholder="Enter your email..." />
        
        <label>Password</label>
        <input className="registerInput" type="password" 
        onChange={(e) => {
          setPassword(e.target.value)
      }}
        placeholder="Enter your password..." />
        <button onClick={register} className="registerButton">Register</button>
        <GoogleLogin />

      </form>
      <a href="login-client">
      <button className="registerLoginButton">Login</button>
      </a>
    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registerclient
