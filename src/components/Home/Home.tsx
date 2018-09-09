import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { User } from '../../entities/User';
import UserCard from './Card';
import { UserState } from '../../types/users';
import { Dispatch } from 'redux';
import { FETCH_USERS, FETCH_USERS_IF_NEEDED } from '../../Redux/constants/User';
import { State } from '../../types';
import { selectUsers } from '../../Selectors/User';
import { connect } from 'react-redux';

export interface HomeProps {
  userState: UserState;
  fetchUsersIfNeeded(): void;
  fetchUsers(): void;
}

class Home extends React.PureComponent<HomeProps> {
  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }

  renderUserCard(users: Array<User> = []) {
    return users.map((user) => (
      <UserCard user={user} key={user.id}/>
    ));
  }
  render() {
    console.log(this.props);
    const { users } = this.props.userState;
    return (
      <>
        <Card.Group itemsPerRow={4}>
          {this.renderUserCard(users)}
        </Card.Group>
      </>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchUsers: () => dispatch({ type: FETCH_USERS }),
    fetchUsersIfNeeded: () => dispatch({ type: FETCH_USERS_IF_NEEDED }),
  };
}

function mapStateToProps(state: State) {
  return {
    userState: selectUsers(state)
  };
}
// const connector = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
