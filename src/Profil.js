import React, { Component,useEffect,useState } from 'react'
import Avatar from './Avatar.png';
import Chrono from "./Chrono.js";

 class Profil extends Component {
    
        state={
          fullName:"AYMEN MEDDEB",
          bio:"Née le 17/06/1979 à gabès titulaire dune maitrise en finance Jai plusieurs experiences professionnelles,des stages et des formations professionnelles en domaine gestion ,finance et en management de qualité essentiellement en certification iso et audit interne en qualité.Actuellement je suis en formation en devellopeur en full stack fournie par gomycode.",
          imgSrc:Avatar, 
          profession:"Développeur full stack",
          seconde:0,
          minute:0
        }
       
  render() {
    
    return (
      <div>
      <Chrono className="moi"/>
      <br/>
        <img src={this.state.imgSrc} width='200px' alt="imgSrc"/>
      <h1>{this.state.fullName}</h1>
      <h1>{this.state.profession}</h1>
      <h1>{this.state.bio}</h1>
      
      </div>
    )
  }
}
export default Profil;