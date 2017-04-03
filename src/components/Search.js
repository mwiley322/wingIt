import React, { Component } from 'react';
import {searchDB} from './Util';
import Cities from './Cities';


class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      search:'',
      hasSearched:false,
      cities: []
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSubmitQuery = this.handleSubmitQuery.bind(this)
  }

  handleSearchInput(e){
    this.setState({
      search: e.target.value,
    })
  }

  handleToggleSearch (e) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }

  handleSubmitQuery(e){
    e.preventDefault()
    searchDB(this.state.search).then(data => {
      this.setState({
        search:'',
        hasSearched: !this.state.hasSearched,
        cities: data
      })
    })
  }

  render(){
    // let {handleSearchInput, handleSubmitQuery, query} = this.props
    if (this.state.hasSearched){
    return (
      <div>
        <button
          onClick={this.handleToggleSearch}
          className="btn btn-default">
            Search Again
        </button>
        <Cities cities={this.state.cities}  />
      </div>
    )
  } else {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmitQuery}>
            <div className="form-group">
              <input
                onChange={this.handleSearchInput}
                value={this.state.value}
                className="form-control"
                type="text"
                placeholder="Enter a City..." />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-primary"
                type="submit">Search!</button>
            </div>
          </form>
        </div>
      </div>
     )
    }
  }
}

export default Search
