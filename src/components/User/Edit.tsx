import * as React from 'react';
import Form from './Form';
import { Grid, Button } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import { User } from '../../entities/User';
import { Dispatch } from '../../types';
import { connect } from 'react-redux';

const user = {
  id: '',
  username: '',
  email: '',
  firstname: '',
  lastname: '',
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
interface RouteProps {
  id?: string;
}

interface Props extends RouteComponentProps<RouteProps> {
  User: Partial<User>;
  getUser: (id: string) => void;
}
class Edit extends React.Component<Props> {

  componentWillMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }

  public render() {
    return  (
      <>
        <Form title="Edit" user={user} />
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

export default connect(null, mapDispatchToProps)(withRouter(Edit));
