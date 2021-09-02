import React from "react";
import Form from "react-bootstrap/Form";
class Forms extends React.Component {
  render() {
    return (
      
      <div>
        <Form.Select aria-label="Default select example">
          <option onChange={this.props.numhornes}>select the number of horns</option>
          <option value="100">100</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </Form.Select>
        <br/>
      </div>
    )
  }
}
export default Forms;
