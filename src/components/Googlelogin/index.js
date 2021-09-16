import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import GoogleButton from 'react-google-button'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";

const Googlelogin = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push(`/home/${auth?.currentUser?.uid}`);
      }
    });
  }, [user]);

  const handleAuth = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/login-client");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    );
  };
 

  return (
    <div>
<GoogleButton style={{marginTop: 30}}
     onClick={handleAuth}

/>
    </div>
  );
};



export default Googlelogin;