import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {


  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.desc}</p>
            <img src={this.props.img} alt="" width="470" height="384" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
