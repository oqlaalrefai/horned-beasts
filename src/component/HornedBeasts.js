import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }
  increaseFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
    console.log(this.state.favorites);
  };
  sendData = () => {
    this.props.showModal(this.props.imageURL,this.props.title, this.props.description);
  };
  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.imageURL}
              onClick={this.increaseFavorites}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Horns: {this.props.horns}</Card.Text>
              <Card.Text>Favorites❤️: {this.state.favorites}</Card.Text>
              <Button variant="primary" onClick={this.sendData}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeast;