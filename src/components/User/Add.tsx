import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import UserForm from './Form';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../../entities/User';
import { FormEvent, SyntheticEvent } from 'react';

interface AddUserProps extends
    RouteComponentProps<{ history?: string }> {
  userState?: User;
  createUser?: () => User;
  user?: User;
}

interface AddUserState {
  user: User;
}

const defaultProps = {
  user: {
    id: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    birthDate: '',
    phoneNumber: '',
    about: '',
    isActive: true,
    address: '',
    picture: '',
    friends: [
      { id: 0, name: '' }
    ],
  }
};

class Add extends React.Component<AddUserProps, AddUserState> {
  public static defaultProps: Partial<AddUserProps> = defaultProps;

  constructor(props: AddUserProps) {
    super(props);
    this.state = {
      user: {
        id: '',
        username: '',
        email: '',
        firstname: '',
        lastname: '',
      }
    };
    this.onChange = this.onChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }
  public onChange(e: FormEvent<EventTarget>) {
    let target = e.target as HTMLInputElement;
    const { name, value } = target;
    let { user } = this.state;
    user[`${name}`] = value;
    this.setState( { user });
  }

  public handleRadio(event: SyntheticEvent<EventTarget>, data: { name: string, value: string }) {
    console.log({ data });
    const { name, value } = data;
    console.log({ name, value });
    let { user } = this.state;
    user[`${name}`] = value === 'true';
    this.setState({ user });
  }

  public render() {
    console.log({ state: this.state });
    const { user } = this.state;
    return (
      <>
        <UserForm title="Add" user={user} onChange={this.onChange} handleRadio={this.handleRadio}/>
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
