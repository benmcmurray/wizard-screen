import React, { Component } from 'react'

import { withUser } from '../providers';
import { EditUserForm } from '../components';

import { Container, Row, Col } from 'reactstrap';
import '../styles/styles.css';

/**
 * Wrap a component using the withPosts provider
 * to get data retrieved with GraphQL.
 */
@withUser
export default class PostRoot extends Component {
  render() {
    const { user, userLoading } = this.props;

    return (
      <Container>
        <h2 className="user-title">Profile</h2>
            <hr />
        <EditUserForm userLoading={userLoading} user={user} />
      </Container>
    )
  }
}