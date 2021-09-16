
import React from "react"; // we are adding the react library into our App component
import "bootstrap/dist/css/bootstrap.min.css";

import data from './assets/data.json'
import SelectedBeast from './component/SelectedBeast';
import HornedBeasts from './component/HornedBeasts';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import HornedData from './assets/data.json';
import Forms from './component/Form'
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornedData,
      showModel: false,
      numhornes:0
    }
  }
hornes = ()=>{if(HornedData.hornes === this.numhornes){console.log(this.hornes);return 1;}

    this.setState({
      showModel: true,
      selectedBeast: this.hornes,
    })
  }
  closeModal = () => {
    this.setState({
      showModel: false
    })
  }

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

        <Header />
        <Forms />
        <Main  HornedData={HornedData} displayModal={this.displayModal}  />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModel}
          close={this.closeModal}
        />
        <Footer />
      </div>
    )

  }
}
export default App;