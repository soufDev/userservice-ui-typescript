import * as React from 'react';

export interface UserProps {
}

export interface UserState {
}

class User extends React.Component<UserProps, UserState> {
  state: UserState = {};

  render() {
    return (
      <h1>Users</h1>
    );
  }
}

export default User;
