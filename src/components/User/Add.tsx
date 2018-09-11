import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import UserForm from './Form';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../../entities/User';

interface AddUserProps extends
    RouteComponentProps<{ history: Object }> {
  userState: User;
  createUser(): User;
}

interface AddUserState {
  user: User;
}

class Add extends React.Component<AddUserProps, AddUserState> {
  state: AddUserState;
  
  public render() {
    const user = {
      id: '',
      username: '',
      email: '',
      name: { first: '', last: '' },
      birthDate: '',
      phoneNumber: '',
      about: '',
      isActive: false,
      address: '',
      picture: '',
      friends: [
        { id: 0, name: '' }
      ],
    };
    return (
      <>
        <UserForm title="Add" user={user} />
        <hr/>
        <Grid>
          <Grid.Column width={2} floated="right">
            <Button color="green" >Save</Button>
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <Button onClick={() => this.props.history.push('/users')}>Cancel</Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Add;
