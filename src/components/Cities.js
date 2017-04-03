import React, { Component } from 'react';
import style from './style'

class Cities extends Component {
    render() {
      let cities = this.props.cities
      let results = cities.map( (city, index) => {
        return (
          <div key ={index}>
          <img src = {city.imageUrl} style ={style.cityImage} alt={city.name}/>
          <h1>Name:{city.name}</h1>
          <h3>Population:{city.Population}</h3>
          <h3>Affordable: ({city.isAffordable} ? $ : $$$)</h3>
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
