
import React from "react";
import HornedBeast from "./HornedBeasts";
import Form from "./Form";

import React from 'react';

import Main from "./component/Main";
import Footer from "./component/Footer";
import App from '../App';
// import data from '../assets/data.json'

import HornedBeasts from './HornedBeasts';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtereddata: 0,
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      filtereddata: parseInt(event.target.value),
    });
  };


    
    render() {
        return (
           
            <div>
              <Header />
              <App />
              <Footer />
            </div>
            
        )
}

  render() {
    return (

      <>
        <main>
          <Form handleChange={this.handleChange} />
          <br />
            {this.props.dataFile.map((item) => {
              if (this.state.filtereddata === 0) {
                return (
                  <HornedBeast
                    title={item.title}
                    imageURL={item.image_url}
                    description={item.description}
                    showModal={this.props.showModal}
                    horns={item.horns}
                  />
                );
              } else if (parseInt(item.horns) === this.state.filtereddata) {
                return (
                  <HornedBeast
                    title={item.title}
                    imageURL={item.image_url}
                    description={item.description}
                    showModal={this.props.showModal}
                    horns={item.horns}
                  />
                );
              }
            })}

        </main>
      </>
    );
  }

      <main>

                <HornedBeasts

                    title="UniWhal"
                    imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                    description="A unicorn and a narwhal nuzzling their horns"
                    keyword= "narwhal"
                    horns='1'
                    
                    />
                <HornedBeasts
                    title= "Unicorn Head"
                    imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg"
                    description= "Someone wearing a creepy unicorn head mask"
                    keyword= "unicorn"
                    horns= '1'
                    />

                <HornedBeasts
                    title='Rhino Family'
                    imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                    description="Mother (or father) rhino with two babies" 
                    keyword= "rhino"
                    horns='2'
                    />
            </main>
        )
    }


}
export default Main;
