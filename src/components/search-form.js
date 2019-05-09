import React from 'react';
import superagent from 'superagent';
class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {location: ''};
}
handleClick = e =>{
  let location =e.target.value;
  this.setState({location});
 };
 handleSubmit = async e => {
  e.preventDefault();
  let url = `https://city-explorer-backend.herokuapp.com/location`
  console.log(this.state.location);
  let searchQuery = this.state.location;
  let data = await superagent.get(url).query({data: searchQuery});
  console.log(data.body);
  this.setState({dataBody: data.body});
  console.log(this.state);

};

  render(){
  return (
    <form>
      <input type='text' onChange = {this.handleClick}/>
       <button onClick= {this.handleSubmit}> Submit </button>
     </form>
  );
}
};
export default Search;