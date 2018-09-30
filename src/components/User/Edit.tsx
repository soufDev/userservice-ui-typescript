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

interface Props extends RouteComponentProps<{ history: string, match: string }> {
  User: Partial<User>;
  getUser: (id: number) => void;
}
class Edit extends React.Component<Props> {

  componentWillMount() {
    const { params } = this.props.match;
    this.props.getUser(params.id);
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
  getUser: (id: number) => dispatch({ type: 'GET_USER', id }),
});

export default connect(null, mapDispatchToProps)(withRouter(Edit));
