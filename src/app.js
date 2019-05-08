import React from 'react';

class App extends React.Component{
  render() {
  return(
  <React.Fragment>
      <Header />
      <Main />
  </React.Fragment>
  );
  }
}

class Header extends React.Component{
  render(){
    return(
    <React.Fragment>
    <header>
    <h1>City Explorer</h1>
    <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more
    </p>
    </header> 
    </React.Fragment>
    
  );
}
}
class Main extends React.Component{
  render() {
  return(
  <React.Fragment>
      <Search />
      <Map />
      <Result />
  </React.Fragment>
  );
  }
}
class Search extends React.Component{
  render(){
  return (
    <React.Fragment>
      <input></input>
      <button>click</button>
    </React.Fragment>
     
  );
};
}
class Map extends React.Component{
  render(){
  return (
    <React.Fragment>
      <div><p>Google Maps</p></div>
    </React.Fragment>
     
  );
};
}
class Result extends React.Component{
  render(){
  return (
    <React.Fragment>
      <section> <b>Results:</b>
      <br/>
      <br/>
      <div>Darksky Weather<p>Lorem ipsum dolor sit amet, posuere dui. Et lobortis dolor nonummy mollis sem et, enim sit magna vel auctor, mauris penatibus diam elementum luctus, accumsan ipsum vel malesuada suspendisse sem wisi. Iaculis sodales viverra massa, sagittis posuere consectetuer lectus hymenaeos. Libero praesent sapien, sit adipiscing primis auctor quam viverra duis, sagittis vivamus. Donec libero donec suspendisse laoreet aenean, lorem tellus, iaculis sunt molestie nibh eros velit eros, nonummy nulla magna vitae rhoncus tempor urna. Varius quam eu sem, molestie a consequat, amet tellus nec sodales laboriosam. In semper augue lorem, lacus posuere, quis praesent risus donec, urna feugiat urna pulvinar, ad mollis ornare aliquet curabitur turpis fermentum. Tincidunt aenean augue non fermentum, magna fusce. Vulputate odio nulla sapien commodo nunc, ultricies donec massa nam ut ultricies, id erat suspendisse, et facilisis lacus non eget, pellentesque vitae orci integer etiam.</p></div>
      <div>Yelp<p>Lorem ipsum dolor sit amet, posuere dui. Et lobortis dolor nonummy mollis sem et, enim sit magna vel auctor, mauris penatibus diam elementum luctus, accumsan ipsum vel malesuada suspendisse sem wisi. Iaculis sodales viverra massa, sagittis posuere consectetuer lectus hymenaeos. Libero praesent sapien, sit adipiscing primis auctor quam viverra duis, sagittis vivamus. Donec libero donec suspendisse laoreet aenean, lorem tellus, iaculis sunt molestie nibh eros velit eros, nonummy nulla magna vitae rhoncus tempor urna. Varius quam eu sem, molestie a consequat, amet tellus nec sodales laboriosam. In semper augue lorem, lacus posuere, quis praesent risus donec, urna feugiat urna pulvinar, ad mollis ornare aliquet curabitur turpis fermentum. Tincidunt aenean augue non fermentum, magna fusce. Vulputate odio nulla sapien commodo nunc, ultricies donec massa nam ut ultricies, id erat suspendisse, et facilisis lacus non eget, pellentesque vitae orci integer etiam.</p></div>
      <div>Event Brite<p>Lorem ipsum dolor sit amet, posuere dui. Et lobortis dolor nonummy mollis sem et, enim sit magna vel auctor, mauris penatibus diam elementum luctus, accumsan ipsum vel malesuada suspendisse sem wisi. Iaculis sodales viverra massa, sagittis posuere consectetuer lectus hymenaeos. Libero praesent sapien, sit adipiscing primis auctor quam viverra duis, sagittis vivamus. Donec libero donec suspendisse laoreet aenean, lorem tellus, iaculis sunt molestie nibh eros velit eros, nonummy nulla magna vitae rhoncus tempor urna. Varius quam eu sem, molestie a consequat, amet tellus nec sodales laboriosam. In semper augue lorem, lacus posuere, quis praesent risus donec, urna feugiat urna pulvinar, ad mollis ornare aliquet curabitur turpis fermentum. Tincidunt aenean augue non fermentum, magna fusce. Vulputate odio nulla sapien commodo nunc, ultricies donec massa nam ut ultricies, id erat suspendisse, et facilisis lacus non eget, pellentesque vitae orci integer etiam.</p></div>
      <div>Hiking<p>Lorem ipsum dolor sit amet, posuere dui. Et lobortis dolor nonummy mollis sem et, enim sit magna vel auctor, mauris penatibus diam elementum luctus, accumsan ipsum vel malesuada suspendisse sem wisi. Iaculis sodales viverra massa, sagittis posuere consectetuer lectus hymenaeos. Libero praesent sapien, sit adipiscing primis auctor quam viverra duis, sagittis vivamus. Donec libero donec suspendisse laoreet aenean, lorem tellus, iaculis sunt molestie nibh eros velit eros, nonummy nulla magna vitae rhoncus tempor urna. Varius quam eu sem, molestie a consequat, amet tellus nec sodales laboriosam. In semper augue lorem, lacus posuere, quis praesent risus donec, urna feugiat urna pulvinar, ad mollis ornare aliquet curabitur turpis fermentum. Tincidunt aenean augue non fermentum, magna fusce. Vulputate odio nulla sapien commodo nunc, ultricies donec massa nam ut ultricies, id erat suspendisse, et facilisis lacus non eget, pellentesque vitae orci integer etiam.</p></div>
      <div>Movies<p>Lorem ipsum dolor sit amet, posuere dui. Et lobortis dolor nonummy mollis sem et, enim sit magna vel auctor, mauris penatibus diam elementum luctus, accumsan ipsum vel malesuada suspendisse sem wisi. Iaculis sodales viverra massa, sagittis posuere consectetuer lectus hymenaeos. Libero praesent sapien, sit adipiscing primis auctor quam viverra duis, sagittis vivamus. Donec libero donec suspendisse laoreet aenean, lorem tellus, iaculis sunt molestie nibh eros velit eros, nonummy nulla magna vitae rhoncus tempor urna. Varius quam eu sem, molestie a consequat, amet tellus nec sodales laboriosam. In semper augue lorem, lacus posuere, quis praesent risus donec, urna feugiat urna pulvinar, ad mollis ornare aliquet curabitur turpis fermentum. Tincidunt aenean augue non fermentum, magna fusce. Vulputate odio nulla sapien commodo nunc, ultricies donec massa nam ut ultricies, id erat suspendisse, et facilisis lacus non eget, pellentesque vitae orci integer etiam.</p></div>
      </section>
      
    </React.Fragment>
     
  );
};
}
export default App;
