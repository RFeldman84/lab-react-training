import React from 'react'

// //<div style={{border: "2px solid black" }} > </div> 


// const IdCard = ({picture, firstName, lastName, gender, height, birth}) => {
const IdCard = (props) => {

  const listStyle = {
    listStyleType: "none",
    margin: 0,
    paddingLeft: '5px',
  }

 

  return (
    <div>
      <div style={{display: "flex"}} > 
      <img src={props.picture} alt="selfie"/>
      <ul style={listStyle} >
        <li><b>First name: </b>{props.firstName}</li>
        <li><b>Last name: </b>{props.lastName}</li>
        <li><b>Gender: </b>{props.gender}</li>
        <li><b>Height: </b>{props.height/100}m</li>
        <li><b>Birth: </b>{props.birth.toDateString()}</li>
      </ul>
      </div> 
    </div>
  ); 
};


export default IdCard