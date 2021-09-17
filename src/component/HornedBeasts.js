import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }
  increasevotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
    console.log(this.state.votes);
  };
  sendData = () => {
    this.props.showModal(this.props.imageURL,this.props.title, this.props.description);
  };
  render() {
    return (
      <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.imageURL}
              onClick={this.increasevotes}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Horns: {this.props.horns}</Card.Text>
              <Card.Text>votes : {this.state.votes}❤️</Card.Text>
              <Button variant="primary" onClick={this.sendData}>
                View Details
              </Button>
            </Card.Body>
          </Card>

      </>
    );
  }
}
export default HornedBeast;
