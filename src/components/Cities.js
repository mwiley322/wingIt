import React, { Component } from 'react';
import {oneCity} from './Util';
import style from './style';
import Post from './Post';

class Cities extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
  getCityProfile(id){
    console.log(id,"id here");

    oneCity(id).then(data => {
      this.setState({
        posts: data
      })
    })
    // render(){
    //   return (
    //     <div>
    //     <Post city={this.state.clickedCity}>
    //     </div>
    //   )
    // }
  }
    render() {
      let cities = this.props.cities
      let results = cities.map( (city) => {
        return (
          <div key ={city._id}>
          <img src = {city.imageUrl} style ={style.cityImage} alt={city.name}/>
          <h1 >Name:{city.name} </h1>
          <h3>Population:{city.Population}</h3>
          <h3>Affordable: ({city.isAffordable} ? $ : $$$)</h3>
          <button onClick={this.getCityProfile.bind(this, city._id)}>See City Profile</button>
          <Post posts = {this.state.posts}/>
          </div>
        )
     })
      return (
        <div>
        {results}
        </div>
      )
   }
}

export default Cities;
