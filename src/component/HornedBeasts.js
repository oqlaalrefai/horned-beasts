import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class HornedBeasts extends React.Component {
  constructor(props){
    super(props)
    this.state = { num: 0 };
  }
  
  Increase =()=>{
    this.state.num += 1
    alert(`button clicked ${this.state.num}`)
    this.setState({num:this.state.num })
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Img
        onClick={() =>
          this.setState({
            num: this.state.num + 1,
          })
        }
        src={this.props.img}
        alt={this.props.description}
        title={this.props.title}
      />
      <Card.Body>
        <Card.Title>Horned Beasts</Card.Title>
        <Card.Title> {this.props.title}</Card.Title>
        <Card.Text>{this.props.describtion} <br/> numCount= {this.state.num}</Card.Text>
        <Button variant="primary" onClick={this.Increase}>Increase</Button>
      </Card.Body>
    </Card>
  );
}
}
export default HornedBeasts;