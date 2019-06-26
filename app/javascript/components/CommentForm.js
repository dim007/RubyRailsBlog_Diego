import React from "react";
import { FormTextarea , Card, CardHeader, CardTitle, CardBody, Form, FormInput, FormGroup } from "shards-react";


export default function CommentForm() {
  return (
    <Card style={{ maxWidth: "600px" }}>
        <CardHeader><CardTitle>{"Add a comment:"}</CardTitle></CardHeader>
        <CardBody>
            <Form>
            <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Alias" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#commentText">Comment</label>
                <FormTextarea id="#commentText" placeholder="Text"/>
            </FormGroup>
            </Form>
        </CardBody>
    </Card>
  );
}