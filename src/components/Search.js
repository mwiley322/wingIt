import React, { Component } from 'react';
import style from '../style';

export default class Search extends Component {
  render(){
    let {handleSearchInput, handleSubmitQuery, search} = this.props;
    return (
      <form style={ style.searchBar } onSubmit={(e) => handleSubmitQuery(e)}>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <input
            onChange={(e) => handleSearchInput(e)}
            value={search}
            className="form-control"
            type="text"
            placeholder='Enter a city...' />
        </div>
      </form>
    );
  }
}
