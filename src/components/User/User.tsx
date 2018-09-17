import * as React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import { Dispatch, State } from '../../types';
import { selectUsers } from '../../Selectors/User';
import { FETCH_USERS, FETCH_USERS_IF_NEEDED } from '../../Redux/constants/User';
import { connect } from 'react-redux';
import { User as UserEntity } from '../../entities/User';
import { UserState } from '../../types/users';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface UserProps extends
  RouteComponentProps<{ history?: string }> {
  userState: UserState;
  fetchUsersIfNeeded(): void;
  fetchUsers(): void;

}

interface StateUser {
}

class User extends React.PureComponent<UserProps, StateUser> {
  state: StateUser = {};

  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }

  renderTableData(users: UserEntity[] = []) {
    return users.map((user: UserEntity, index: number)  => (
      <Table.Row key={user.id}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>{user.firstname}</Table.Cell>
        <Table.Cell>{user.lastname}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <Button color="green" onClick={() => this.props.history.replace(`/user/edit/${user.id}`)}>
            <Icon name="edit" />
            Edit
          </Button>
          <Button color="red" onClick={() => this.props.history.replace(`/user/delete/${user.id}`)}>
            <Icon name="remove" />
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }
  renderTable() {
    const { users } = this.props.userState || { users: [] };
    return (
      <Table celled={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>
              <Button primary={true} onClick={() => this.props.history.replace('/user/new')}>
                <Icon name="add user" />
                Add
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderTableData(users)}
        </Table.Body>
      </Table>
    );
  }

  render() {
    return (
      <>
        <h1>Users</h1>
        {this.renderTable()}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsers: () => dispatch({ type: FETCH_USERS }),
  fetchUsersIfNeeded: () => dispatch({ type: FETCH_USERS_IF_NEEDED }),
});

const mapStateToProps = (state: State) => ({
  userState: selectUsers(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
