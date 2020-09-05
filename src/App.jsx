import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Card from './Card';
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
    <>
    <Container >

      <div className="App">
        <h1>Instagram Profile Generator</h1>
        <TextField id="standard-basic" label="Username"  style={{ marginRight: "25px" }} onChange={changeHandler} />
        <Button color="secondary" variant="contained" onClick={clickHandler}><SearchRoundedIcon
         style={{ fontSize: 40 }} 
         color="inherit" 
         /></Button>

        {/* ==========CARD COMPONENT====================== */}
       
      <Card image={img} 
        follo ={follower} 
        folling={following}
        user={userName}
        namex  ={name}
        status={privacy}
        link={api}
        postx={post}
        stylem={styles}
        />

        
      </div>
      <div className="App" >
        <h4>Developer| Codebloded</h4>
      </div>
    </Container>
 
    </>

     
  );
}

export default App;

