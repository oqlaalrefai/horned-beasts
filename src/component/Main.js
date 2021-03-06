
import React from "react";
import HornedBeast from "./HornedBeasts";
import Form from "./Form";


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
              } 
              else 
              {return(<></>)}
              })}
            {this.props.dataFile.map((item) => {
              if (parseInt(item.horns) === this.state.filtereddata) {
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
              else{return(<></>)}
            })}

        </main>
      </>
    );
  }

}
export default Main;
