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

import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeasts extends React.Component {

  render() {
    console.log('props: ', this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.imageUrl} alt="" />
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>
      </div>
    )
  }


    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    incrementNumberOfPets = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }
    displayModal = () => {
        this.props.displayModal(this.props.title)
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick={this.displayModal}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementNumberOfPets} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            votes =  {this.state.votes}❤️
                        </Card.Text>
                        <Card.Text>

                            {this.state.numberOFvotes} ❤️

                            {this.props.description}

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }


}
export default HornedBeast;