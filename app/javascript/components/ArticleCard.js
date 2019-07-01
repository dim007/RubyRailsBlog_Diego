import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  ButtonToolbar,
  FormInput,
  InputGroup
} from "shards-react";


export default function ArticleCard(props) {
  return (
    <Card style={{ maxWidth: "600px" }}>
      <CardHeader>{props.title}</CardHeader>
      <CardImg src={props.picture} height="300"/>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.body}</p>
        <Button pill href={'/articles/' + props.id}>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>
        <ButtonToolbar>
          <ButtonGroup size="sm">
            <Button theme="info" href={'/articles/' + props.id}>Comment</Button>
            <Button outline theme="warning" href={'/articles/' + props.id + '/edit'}>Edit</Button>
            <Button outline data-confirm="Are you sure?" data-method='delete' href={'/articles/' + props.id} theme='danger'>Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </CardFooter>
    </Card>
  );
}