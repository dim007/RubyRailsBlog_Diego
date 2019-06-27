import React from "react";
import {   Button,  FormTextarea , Card, CardHeader, CardTitle, CardBody, Form, FormInput } from "shards-react";


class CommentForm extends React.Component {
  //To modify outside data, configure your text inputs with the correct name, in this case name="comment[body]"
  constructor(props) {
    super(props);
    this.state = {name: "", text: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleTextChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event){
    alert("VALUE:" + this.state.text); 
    event.preventDefault();
  }
  //This render uses "<Form>", this messes with form in the outer loop in _form.htlm.erb for comments.
  renderOLD() {
    return (
      <Card style={{ maxWidth: "600px" }}>
          <CardHeader><CardTitle>{"Add a comment:"}</CardTitle></CardHeader>
          <CardBody>
              <Form >
                  <label htmlFor="#name">Name</label>
                  <FormInput type="text" name="comment[commenter]" value={this.state.name} placeholder="Alias" onChange={this.handleNameChange}/>
                  
                  <label htmlFor="#comment">Comment</label>
                  <FormTextarea type="text" name="comment[body]" value={this.state.text} placeholder="Text" onChange={this.handleTextChange}/>
                  <br/>
                  <Button outline theme="success" type="submit">Submit</Button>
              </Form>
          </CardBody>
      </Card>
    );
  }
  render() {
    return (
      <div>
        <Card style={{ maxWidth: "600px"}}>
          <CardHeader><CardTitle>{"Add a comment:"}</CardTitle></CardHeader>
          <CardBody>
            <label htmlFor="#name">Name</label>
            <FormInput type="text" name="comment[commenter]" value={this.state.name} placeholder="Alias" onChange={this.handleNameChange}/>

            <label htmlFor="#comment">Comment</label>
            <FormTextarea type="text" name="comment[body]" value={this.state.text} placeholder="Text" onChange={this.handleTextChange}/>
            <br/>
            <Button outline theme="success" type="submit">Submit</Button>

          </CardBody>
        </Card>
      </div>
    );
  }
}
export default CommentForm //Need this to render in views