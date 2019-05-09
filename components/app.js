import React from 'react';
import Header from './header';
import Map from './map';



class App extends React.Component{
  render() {
  return(
  <React.Fragment>
      <Map />
      <Header />
  </React.Fragment>
  );
  }
}

export default App;
