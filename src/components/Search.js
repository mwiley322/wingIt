import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (

          <div className="container1">
      <div className="row2">
          <div className="col-xs-8 col-xs-offset-2">
  		    <div className="input-group">
                  <div className="input-group-btn search-panel">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      	<span id="search_concept">Filter by</span> <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#contains">Contains</a></li>
                        <li><a href="#its_equal">Its equal</a></li>
                        <li><a href="#greather_than">Greather than</a></li>
                        <li><a href="#less_than">Less than</a></li>
                        <li className="divider"></li>
                        <li><a href="#all">Anything</a></li>
                      </ul>
                  </div>
                  <input type="hidden" name="search_param" value="all" id="search_param"></input>
                  <input type="text" className="form-control" name="x" placeholder="Search term..."></input>
                  <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </div>
        </div>
    </div>

        )
    }
}

export default Search;
