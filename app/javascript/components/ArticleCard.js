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
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>{props.title}</CardHeader>
      <CardImg src={props.img} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.body}</p>
        <Button pill>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>
        <ButtonToolbar>
          <ButtonGroup size="sm">
            <Button outline theme="info">Edit</Button>
            <Button outline theme="danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </CardFooter>
    </Card>
  );
}