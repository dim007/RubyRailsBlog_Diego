//<%= javascript_pack_tag 'my_example_checkpoint'%>

import React from 'react'
import ReactDOM from 'react-dom'
import ArticleCard from '../components/ArticleCard'

const element = <h2>Hello, world</h2>;
export default function AC() {
    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardHeader>Card header</CardHeader>
        <CardBody>
          <CardTitle>Lorem Ipsum</CardTitle>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button>Read more &rarr;</Button>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );
  }
  class Square extends React.Component {
    render() {
      return (
          <div>
        <h1>INSIDE SQUARE</h1>
        <h2>Hello, sqr</h2>
        <div>{this.renderSquare(0)}</div>
        </div>
      );
    }
    renderSquare(i) {
        return (
          <ArticleCard />
        );
      }
  };


  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Square />,
      document.getElementById('root')
    )
  })
