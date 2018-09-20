import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import UserForm from './Form';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { User } from '../../entities/User';
import { FormEvent, SyntheticEvent } from 'react';
import { addPropertiesToPartialUser } from '../../utils/helpers';
import { Dispatch } from '../../types';
import { ADD_USER } from '../../Redux/constants/User';
import { connect } from 'react-redux';

interface AddUserProps extends
    RouteComponentProps<{ history?: string }> {
  userState?: User;
  createUser?: (user: Partial<User>) => void;
  user?: User;
}

interface AddUserState {
  user: Partial<User>;
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
        username: '',
        email: '',
        firstname: '',
        lastname: '',
      }
    };
    this.onChange = this.onChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  public onSubmit() {
    const { user } = this.state;
    const completeUser = addPropertiesToPartialUser(user);
    console.log(completeUser);
    this.props.createUser(completeUser);
    this.props.history.push('/users');
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
            <Button color="green" onClick={this.onSubmit} >Save</Button>
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <Button onClick={() => this.props.history.push('/users')}>Cancel</Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUser: (user: Partial<User>) => dispatch({ type: ADD_USER, payload: user }),
});

export default connect(null, mapDispatchToProps)(withRouter(Add));
