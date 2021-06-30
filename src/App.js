import React from 'react';
import Profil from './Profil.js';
import "./App.css";





 class App extends React.Component {
  state={
    show:true,
  }  
  
      render() {
        let profile;
        if(this.state.show)
        {
          profile=
          <Profil/>
        }
         
           
   
    return (
       <div className="App">  
      {profile}
      <button style={{width:"100px",height:"50px",backgroundColor:"blue",fontSize:"20px"}} onClick={()=>{this.setState({show:!this.state.show})}}>show</button>
       </div>
          )
  }
}

export default App;