import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      yelpInfo:[],
    };
}

yelpResult =async e=>{
  let url = `https://city-explorer-backend.herokuapp.com/yelp`
  let searchQuery = this.props.yelpData;
  let data = await superagent(url).query({data: searchQuery});
  this.setState({yelpInfo:data.body})
}
componentDidUpdate(prevProps){
  if (this.props.yelpData.search_query !== prevProps.yelpData.searchQuery){
    this.yelpResult();
  }
}
render(){console.log(this.state.yelpInfo);
return(
  <div>
    {this.state.yelpInfo.length>0?this.state.yelpInfo.map(ele =>{
      return<li>{ele.name+' : ' + ele.rating}</li>
    }): ''}
  </div>
)
}
}

export default Yelp;