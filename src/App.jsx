import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import './App.css';

function App() {
  const [img, setImg] = useState();
  const [follower, setFollower] = useState();
  const [following, setFollowing] = useState();
  const [post, setPost] = useState();
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [api , setapi] = useState('_its_ronnny_____');
  const [privacy, setPrivacy] =useState();

  const [apiName, setApiName] = useState();
  const __API = `https://www.instagram.com/${api}/?__a=1`;
  useEffect(() => {
    fetch(`${__API}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        setImg(data.graphql.user.profile_pic_url_hd);
        setFollower(data.graphql.user.edge_followed_by.count)
        setFollowing(data.graphql.user.edge_follow.count);
        setUserName(data.graphql.user.username);
        setName(data.graphql.user.full_name);
        setPost(data.graphql.user.edge_owner_to_timeline_media.count);
        setPrivacy(data.graphql.user.is_private);
        
      })
  }, [apiName])
  const styles = {
    borderRadius: "50%",
    border: "4px solid black",
    width: "50%",
    height: "50%",
    marginTop: "4px"
  }
  const changeHandler = (e)=>{
        setapi(e.target.value);
       
        
  }
  const clickHandler =()=>{
    console.log("Clicked")
    setApiName(api);
  

  }
  return (
    <Container >

      <div className="App">
        <h1>Instagram Profile Generator</h1>
        <TextField id="standard-basic" label="Username"  style={{ marginRight: "25px" }} onChange={changeHandler} />
        <Button color="secondary" variant="contained" onClick={clickHandler}><SearchRoundedIcon
         style={{ fontSize: 40 }} 
         color="inherit" 
         /></Button>

        {/* ==========CARD COMPONENT====================== */}
        <Container maxWidth="sm" style={{
         marginTop: "20px",
         border: "2px solid black", 
        borderRadius: "16px",
        boxShadow:"4px 9px 25px 0px black",
        backgroundColor:" rgb(250 242 167 / 59%)"}}>
          <div className="App" >
            <img alt="_its_ronnny_____" style={styles} src={img} />
            <h2>{userName}</h2>
            <h5>{name}</h5>
            <Container style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
              <div className="App">
                <h5>Posts</h5>
                <span><b>{post}</b></span>
              </div>

              <div className="App">
                <h5>Followers</h5>
                <span><b>{follower}</b></span>
              </div>

              <div className="App">
                <h5>Following</h5>
                <span><b>{following}</b></span>
              </div>

            </Container>
            <h5>Account Privacy: {privacy?"Private":"Public"} </h5>
            <Button variant="contained" color="primary" style={{margin:"10px"}}><a 
            style={{color:"white", textDecoration:"none"}}
             href={`https://www.instagram.com/${api}/?`} target="__blank">Go to Profile</a></Button>
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default App;
