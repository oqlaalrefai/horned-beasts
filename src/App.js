
import "./App.css";
import Data from "./assets/data.json";
import HornedBeasts from './component/HornedBeasts';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Forms from './component/Form'
import SelectedBeast from './component/SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      img: '',
      name: '',
      desc: '',
    };
  }
  showSelectedBeast = (imgUrl, _name, description) => {
    this.setState({
      show: true,
      img: imgUrl,
      name: _name,
      desc: description,
    });
  };
  hideSelectedBeast = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (

      <>
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
        <Main dataFile={Data} showModal={this.showSelectedBeast} />
        <SelectedBeast hideModal={this.hideSelectedBeast} show={this.state.show} img={this.state.img} name={this.state.name} desc={this.state.desc}/>
        <Footer />

      </>
    );

      </div>
    )


  }
}
export default App;
