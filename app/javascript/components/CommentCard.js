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


export default function CommentCard(props) {
  return (
    <Card style={{ maxWidth: "400px" }}>
      <CardHeader><CardTitle>{props.title}</CardTitle></CardHeader>
      <CardImg src={props.img} />
      <CardBody>
        <p>{props.body}</p>
      </CardBody>
      <CardFooter>
        <ButtonToolbar>
          <ButtonGroup size="sm">
            <Button data-confirm="Are you sure?" data-method='delete' href={'/articles/' + props.article_id + '/comments/' + props.comment_id} theme='danger'>Delete Comment</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </CardFooter>
    </Card>
  );
}