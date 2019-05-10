import React from 'react';
import Header from './components/header';
import Map from './components/map';
import Search from './components/search-form';
import Weather from './components/weather';
import Movies from './components/movies';
import Yelp from './components/yelp';




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      location:{
      search_query:'',
      formatted_query:'',
      latitude: '',
      longitude: '',
    }
  };
}

  updateLoc = (location)=>{
    
    this.setState({location});
  }
  render() {
    
  return(
  <React.Fragment>
      <Header />
      <p>{this.state.formatted_query}</p>
      <Search updateLoc={this.updateLoc} />
      <Map latitude = {this.state.location.latitude}
           longitude={this.state.location.longitude}/>
           <div class="weather"><b />Weather Result: not guranteed<Weather darkskyData={this.state.location} /></div>
      <div class="movies">Movies Result:<b /><Movies moviesData={this.state.location} /></div>
      <div class="yelp">Yelp Results:<b /><Yelp yelpData={this.state.location} /></div>
      
      
  </React.Fragment>
  );
  }
}

export default App;
