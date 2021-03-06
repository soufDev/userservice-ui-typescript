import * as React from 'react';
import Form from './Form';
import { Grid, Button } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import { User } from '../../entities/User';
import { Dispatch, State } from '../../types';
import { connect } from 'react-redux';
import { selectUser } from '../../Selectors/User';

// const user = {
//   id: '',
//   username: '',
//   email: '',
//   firstname: '',
//   lastname: '',
//   birthDate: '',
//   phoneNumber: '',
//   about: '',
//   isActive: false,
//   address: '',
//   picture: '',
//   friends: [
//     { id: 0, name: '' }
//   ],
// };
interface RouteProps {
  id?: string;
}

interface PropsEditUser extends RouteComponentProps<RouteProps> {
  user: Partial<User>;
  getUser: (id: string) => void;
}

interface StateEditUser {
  user: Partial<User>;
}
class Edit extends React.Component<PropsEditUser, StateEditUser> {
  state: StateEditUser = {
    user: {},
  };

  static getDerivedStateFromProps(props: PropsEditUser, state: StateEditUser) {
    if (props.user) {
      return  {
        user: props.user,
      };
    }
    return null;
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id);
    console.log('did mount', this.props.user);
  }

  onChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    const { value, name } = target;
    let { user } = this.state;
    user[name] = value;
    this.setState({ user }); 
  }

  public render() {
    console.log('render', this.state.user);
    const { user } = this.state;
    return  (
      <>
        <Form title="Edit" user={user} onChange={this.onChange} />
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUser: (id: string) => dispatch({ type: 'GET_USER', id }),
});

const mapStateToProps = (state: State) => ({
  user: selectUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Edit));
