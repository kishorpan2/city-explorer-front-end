import React from 'react';
import superagent from 'superagent';

class Weather extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo:[],
    };
}

weatherResult =async e=>{
  let url = `https://city-explorer-backend.herokuapp.com/weather`
  let searchQuery = this.props.darkskyData;
  let data = await superagent(url).query({data: searchQuery});
  this.setState({weatherInfo:data.body})
}
componentDidUpdate(prevProps){
  if (this.props.darkskyData.search_query !== prevProps.darkskyData.searchQuery){
    this.weatherResult();
  }
}
render(){
return(
  <div>
    {this.state.weatherInfo.length>0?this.state.weatherInfo.map(ele =>{
      return<li>{ele.time+' : ' + ele.forecast}</li>
    }): ''}
  </div>
)
}
}

export default Weather;
