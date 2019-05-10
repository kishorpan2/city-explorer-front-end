import React from 'react';
import superagent from 'superagent';

class Movies extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      moviesInfo:[],
    };
}
moviesResult = async e => {
  let url = `https://city-explorer-backend.herokuapp.com/movies`
  let searchQuery = this.props.moviesData;
  let data = await superagent(url).query({data: searchQuery});
  this.setState({moviesInfo:data.body}, () => console.log(this.state.moviesInfo[0]))
}
componentDidUpdate(prevProps){
  if (this.props.moviesData.search_query !== prevProps.moviesData.searchQuery){
    this.moviesResult();
  }
}
render(){
  return(
  <div>
    <div>
    {this.state.moviesInfo.length>0?this.state.moviesInfo.map(ele =>{
      return<li>{ele.title+' : ' + ele.overview}</li>
    }): ''}
  </div>

  </div>
  )}}

export default Movies;