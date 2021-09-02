import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeasts extends React.Component {

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
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;