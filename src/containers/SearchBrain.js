import React, {Component} from 'react';
import Search from '../components/Search';
import CitySearchResults from '../components/CitySearchResults';
import { searchAllCities } from '../Util';
import ReactDOM from 'react-dom';


export default class SearchBrain extends Component {
 constructor(props){
   super(props)
   this.state = {
     search:'',
     badSearch: false,
     hasSearched: false,
     cities: []
   };
  }

  handleSearchInput(e){
    this.setState({
      search: e.target.value,
    });
  }

  handleSubmitQuery(e){
    e.preventDefault();
    if(this.state.search.length > 2){
      this.setState({
        hasSearched: !this.state.hasSearched
      });
      searchAllCities(this.state.search).then(data => {
        this.setState({
          search:'',
          badSearch: this.state.badSearch,
          cities: data
        });
      });
    } else {
      this.setState({
        search:'',
        badSearch: !this.state.badSearch,
        cities:[]
      });
      alert('please enter more than 2 letters')
    }
  }
  render(){
  if (this.state.hasSearched){
    ReactDOM.render(
      <CitySearchResults cities={this.state.cities} />, document.getElementById('results')
    );
  } else {
      return  (
        <Search handleSearchInput={ (e) => this.handleSearchInput(e) }
                handleSubmitQuery={ (e) => this.handleSubmitQuery(e) }
                search={this.state.search}/>
      );
    }
  }
}
