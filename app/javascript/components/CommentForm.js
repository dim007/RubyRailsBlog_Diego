import React from "react";
import {   Button,  FormTextarea , Card, CardHeader, CardTitle, CardBody, Form, FormInput } from "shards-react";


class CommentForm extends React.Component {
  //To modify outside data, pass in props corresponding to outside data
  constructor(props) {
    super(props);
    this.state = {commenter: props.comment.commenter, body: props.comment.body}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({commenter: event.target.value});
  }
  handleTextChange(event) {
    this.setState({body: event.target.value});
  }
  handleSubmit(event){
    alert("VALUE:" + this.state.body); 
    event.preventDefault();
  }
  render() {
    return (
      <Card style={{ maxWidth: "600px" }}>
          <CardHeader><CardTitle>{"Add a comment:"}</CardTitle></CardHeader>
          <CardBody>
              <Form onSubmit={this.handleSubmit}>
                  <label htmlFor="#commenter">Name</label>
                  <FormInput type="text" name="comment[commenter]" value={this.state.commenter} placeholder="Alias" onChange={this.handleNameChange}/>
                  
                  <label htmlFor="#body">Comment</label>
                  <FormTextarea type="text" name="comment[body]" value={this.state.body} placeholder="Text" onChange={this.handleTextChange}/>
                  <br/>
                  <Button outline theme="success" type="submit">Submit</Button>
              </Form>
          </CardBody>
      </Card>
    );
  }
}
export default CommentForm //Need this to render in views