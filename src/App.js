import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'


// other way to organize folder how to import
import CreditCard from './components/credit-card/CreditCard';


function App() {
  const divStyle = {
    border: "1px solid black", 
    display: "flex", 
    padding: "5px",
  } 

  
  return (
<div style={{margin: "10px"}}>
  <br/>
  <h1>IdCard</h1>
   <div>
    <div>
    <IdCard 
    lastName='Doe'
    firstName='John'
    gender='male'
    height={178}
    birth={new Date("1992-07-14")}
    picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    </div>
      <br/>
    <div>
      <IdCard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height={172}
    birth={new Date("1988-05-11")}
    picture="https://randomuser.me/api/portraits/women/44.jpg"/>
    </div>
  </div>

  <br/>
  <h1>Greetings</h1>
  <div style={divStyle} >
  <Greetings lang="de">Ludwig</Greetings>
  </div>
  <br/>
  <div style={divStyle} >
  <Greetings lang="fr">François</Greetings>
  </div>
  <br/>

  <h1>Random</h1>
  <div  style={divStyle} >
  <Random min={1} max={6}/>
  </div>
  <br/>
  <div  style={divStyle} >
   <Random min={1} max={100}/>
  </div>
  <br/>

  <h1>BoxColor</h1>
  <div>
  {/*? how to add justifyContent: 'center' to style list after object divStyle for just this one??*/}
  <BoxColor r={255} g={0} b={0} />
  </div>
  <br/>
  <div>
  <BoxColor r={128} g={255} b={0} />
  </div>

  <br/>
  <h1>CreditCard</h1>
  


  {/* lat div */}
</div> 
  );
}

export default App;
