import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withAddUser } from '../providers';

@withAddUser
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addUser({
      name: event.target.name.value,
      init: event.target.email.value
      email: event.target.email.value
      password: event.target.password
    });
  }

  render() {
    return (
      <div className="new-user-form">
        <h2>New Account</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="postTitle">Username</Label>
            <Input type="text" name="name" id="postTitle" placeholder="Title" />
          </FormGroup>
          <FormGroup>
            <Label for="postContent">Account Email</Label>
            <Input type="text" name="email" id="postContent" placeholder="Content" />
          </FormGroup>
          <FormGroup>
            <Label for="postContent">Account Email</Label>
            <Input type="password" name="password" id="postContent" placeholder="Content" />
          </FormGroup>
          <FormGroup>
            <Label for="postContent">Account Email</Label>
            <Input type="password" name="password_confirm" id="postContent" placeholder="Content" />
          </FormGroup>
          <Button className="submit-button">Create New Account</Button>
        </Form>
      </div>
    )
  }
}