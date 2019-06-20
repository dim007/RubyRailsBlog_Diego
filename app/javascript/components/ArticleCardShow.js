import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";


export default function ArticleCardShow(props) {
  return (
    <Card style={{ maxWidth: "800px" }}>
      <CardHeader>{props.title}</CardHeader>
      <CardImg src={props.img} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.body}</p>
      </CardBody>
    </Card>
  );
}