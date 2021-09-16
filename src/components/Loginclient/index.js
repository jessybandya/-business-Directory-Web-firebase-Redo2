import React, {useState,useEffect} from 'react';
import Header from "../Header"
import Footer from "../Footer"
import "./styles.css"
import GoogleButton from 'react-google-button'
import {auth, provider} from './../firebase';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLogin from "./../Googlelogin";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


function Loginclent() {
    const classes = useStyles();

    const {currentUser} = auth
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (e)=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
          history.push(`/home/${auth?.currentUser?.uid}`); 
        })
        .catch((e) =>{
            if (
                e.message ===
                alert(e.message)
                
                
                ) {
                    <Alert severity="error">Invalid password entered!</Alert>
            } else if (
                e.message ===
                alert(e.message)
            ) {
                history.push("/signup");
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
            }
        })
    }
    return (
        <div>
            <div>
                <Header />
                <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" 
        onChange={(e) => {
            setEmail(e.target.value)
        }}
        placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" 
        onChange={(e) => {
            setPassword(e.target.value)
        }}
        placeholder="Enter your password..." />
        <button onClick={login} className="loginButton">Login</button>
        <GoogleLogin />
      </form>
      <a href="register-client">
      <button className="loginRegisterButton">Register</button>
      </a>
    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Loginclent
