import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
const Card = (props) => {
    console.log(props);
    return(
        <Container maxWidth="sm" style={{
            marginTop: "20px",
            border: "2px solid black", 
           borderRadius: "16px",
           boxShadow:"4px 9px 25px 0px black",
           backgroundColor:" rgb(250 242 167 / 59%)"}}>
             <div className="App" >
               <img alt="_its_ronnny_____" style={props.stylem} src={props.image} />
               <h2>{props.user}</h2>
               <h5>{props.namex}</h5>
               <Container style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
                 <div className="App">
                   <h5>Posts</h5>
                   <span><b>{props.postx}</b></span>
                 </div>
   
                 <div className="App">
                   <h5>Followers</h5>
                   <span><b>{props.follo}</b></span>
                 </div>
   
                 <div className="App">
                   <h5>Following</h5>
                   <span><b>{props.folling}</b></span>
                 </div>
   
               </Container>
               <h5>Account Privacy: {(props.status)?"Private":"Public"} </h5>
               <Button variant="contained" color="primary" style={{margin:"10px"}}><a 
               style={{color:"white", textDecoration:"none"}}
                href={`https://www.instagram.com/${props.link}/?`} target="__blank">Go to Profile</a></Button>
             </div>
           </Container>
    )
}

export default Card;