import React, { useState, useEffect, useRef } from 'react';
import "./styles.css"
import Header from "../Header"
import Footer from "../Footer"
import {auth, db} from "../firebase";
import {Link, useHistory, useParams} from 'react-router-dom';
import Myposts from "../Myposts"


function Myprofile({user}) {
  const [profileUserData, setProfileUserData] = useState();
  const { uid } = useParams();
  const history = useHistory("");

  useEffect(() => {
    db.collection('users').doc(user.uid).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])

  if(!user){
    history.push("/login-client");
}
    return (
        <>
        <body class="html not-front not-logged-in one-sidebar sidebar-first page-node page-node- page-node-22 node-type-page section-contact-us-we-value-your-feedback-we-listen-you" >
        <p class="skip-link__wrapper" style={{display: "none"}}>
      <a style={{display: "none"}} href="#yellowmobile" class="skip-link visually-hidden visually-hidden--focusable" id="skip-link">Jump to navigation
      </a>
    </p>
                        <Header />

        <main style={{marginTop:70}}>
          
        {/* <Topbar /> */}
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://pickeringtonlibrary.org/wp-content/uploads/2021/03/getty_675925952_405041-1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user?.displayName}</h4>
                <span className="profileInfoDesc">{user?.email}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Myposts uid={uid}/>
            {/* <Rightbar profile/> */}
          </div>
        </div>
      </div>

                
        </main>
        </body>
                    <Footer />
    </>
    )
}

export default Myprofile
