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
      <CardImg src={props.picture1} height="800"/>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.body1}</p>
        <CardImg src={props.picture2} />
        <p>{props.body2}</p>
        <CardImg src={props.picture3} />
        <p>{props.body3}</p>
      </CardBody>

    </Card>
  );
}