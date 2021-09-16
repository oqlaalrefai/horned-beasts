import React from "react"; // we are adding the react library into our App component
import "bootstrap/dist/css/bootstrap.min.css";

import data from './assets/data.json'
import SelectedBeast from './component/SelectedBeast';
import HornedBeasts from './component/HornedBeasts';
class App extends React.Component {
  render() {
    return (
      <div>
      <SelectedBeast/>
      {data.map((element,index) => {
          return (
          <HornedBeasts title={element.title} url={element.image_url} description={element.description} key={index}/>
          );
      })}
    </div>

    );
  }
}
export default App;
