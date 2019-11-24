import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_USER = gql`
  {
    user {
      _id
      name
      init
      email
      password
      created
      login
      access
      status
    }
  }
`;

const withUser = Component => props => {
  return (
    <Query query={GET_POSTS}>
      {({ loading, data }) => {
        return (
          <Component userLoading={loading} user={data && data.user} {...props} />
        );
      }}
    </Query>
  );
};

export default withUser; 