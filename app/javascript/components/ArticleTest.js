import React from "react";

//This example can work with comments/_form.html.erb, this source code is useful for including react into a RubyRails Form.
export default class ArticleTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        content: ""
      };
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
    }
  
    handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
  
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
  
    render() {
      return (
        <div>
          <label>Title</label>
          <input
            type="text"
            name="comment[commenter]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
  
          <label>Content</label>
          <input
            type="text"
            name="comment[body]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
  
          <input type="submit" value="Update Post" />
        </div>
      );
    }
  }