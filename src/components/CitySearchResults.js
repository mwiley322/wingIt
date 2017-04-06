import React, {Component} from "react";
import style from '../style';

export default class CitySearchResults extends Component{

  render(){
    let cities = this.props.cities;
    let results = cities.map( (city, index) => {
        return (
          <div key={city._id} className="col-md-9">
            <div className="thumbnail">
              <div className="caption-full">
                <h2 className="cityName">{city.name}</h2>
                <h4 className="cityPop">Population:{city.Population}</h4>
                <img src={city.imageUrl} style={style.cityImage} alt={city.name} style = {style.resultImage} className="img-responsive"/>
               </div>
               <h6>Description= {city.description}</h6>
               <div className="ratings" key={city._id}>
              </div>
              <h3>Price: {city.isAffordable ? '$' : '$$$'}</h3>
              <p>
               <span className="glyphicon glyphicon-star"></span>
               <span className="glyphicon glyphicon-star"></span>
               <span className="glyphicon glyphicon-star"></span>
               <span className="glyphicon glyphicon-star"></span>
               <span className="glyphicon glyphicon-star-empty"></span>
               4.0 stars
              </p>
            </div>
           </div>
        )
      });
    return (
      <div>
        {results}
      </div>
    );
  }
}
