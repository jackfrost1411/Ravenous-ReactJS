import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'
import Yelp from './util/Yelp'
//const business = {}

//const businesses = [business,business, business,business,business,business];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      businesses:[]
    };
    this.searchYelp=this.searchYelp.bind(this);
  }
  searchYelp(term,location,sortBy){
    Yelp.search(term,location,sortBy).then(businesses=>{
      console.log(businesses);
      this.setState({businesses:businesses});
    });
    //console.log(`Searching Yelp with ${term} , ${location} , ${sortBy} `)
  }
  render() {
    //console.log(this.state.businesses);
    return (
      <div className="App">
  <h1>Find Your Food..!</h1>
  <SearchBar searchYelp={this.searchYelp}/>
  <BusinessList businesses={this.state.businesses}/>
</div>
    );
  }
}

export default App;
