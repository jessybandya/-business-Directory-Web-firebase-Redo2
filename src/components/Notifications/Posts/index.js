import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { auth, db } from '../../firebase';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
  

function Posts({fromEmail,postId,fromId,fromUsername,fromphotoURL,subject,text,timestamp,category,read,phone,businessName,toId}) {
    const classes = useStyles();

    const [posts1, setPosts1] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     db.collection('businesses').doc(postId).onSnapshot((doc) => {
         setPosts1(doc.data());
     });
   }, [])


   
useEffect(() => {
    //   db.collection('messages').where('chat', '==', post).orderBy('timestamp', 'asc').get().then(snapshot => {
    //       console.log(snapshot)
    //       setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    //   }).catch(error => {
    //       console.error(error)
    //   })
      const unsub = db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
          console.log(snapshot)
          let messages = []
          snapshot.forEach(doc => {
              messages.push({id:doc.id, data:doc.data()})
              if (doc.data().toId === toId) {
                  doc.ref.update({read:true})
              }
          })
          setPosts(messages)
      }, error => console.error(error))
      return function cleanup () {
          unsub()
      }
  }, []);

    return (
        <>
        {auth?.currentUser?.uid !== fromId &&(
            <>
<List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={fromphotoURL} />
        </ListItemAvatar>
        <ListItemText
          primary={fromUsername}
          phone
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {subject}
              </Typography>
              {` — ${text}`}
              <div style={{marginTop:10}}>
                  Business Name: {businessName}
              </div>
              <div>
                  Category: {category}
              </div>
              <div style={{marginTop:10}}>
                  Phone: {phone}
              </div>
              <div>
                  Email: {fromEmail}
              </div>
            </React.Fragment>
            
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <Divider variant="inset" component="li" />

    </List>
            </>
        )}
    
    </>
    )
}

export default Posts
