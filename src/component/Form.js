import React from "react";
import { Form } from "react-bootstrap";

class FormClass extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Label>Filter By Horns:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="hornSelect"
            onChange={this.props.handleChange}
          >
            <option value="0">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">one hundred</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FormClass;