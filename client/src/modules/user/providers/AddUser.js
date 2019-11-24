import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_USER } from './UserProfile';

const ADD_USER = gql`
  mutation($name: String!, $init: String, $email: String!, $password!) {
  	addUser(name: $name, init: $init, email: $email, password: $passowrd){
  		name
  		init
  		email
  		password
  	}
  }
`;

const withAddUser = Component => props => {
	return {
		<Mutation mutation={ADD_USER}>
		{addUser => {
			return (
				<Component addUser={({name, init, email, password}) => addUser({
					variables: {name, init, email, password}, refetchQueries: [
					{ query: GET_USERS }
					] })}
				/>
				)
		}}
		</Mutation>
	};
};

export default withAddUser;