import * as React from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import { API_PATH } from '../../utils/constUrls';
import { User } from '../../entities/User';
import UserCard from './Card';
export interface HomeProps {

}

export interface HomeState {
  users: User[];
}

class Home extends React.PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const response = await axios.get(`${API_PATH}users`);
    console.log(response);
    this.setState({ users: response.data });
  }

  renderUserCard() {
    console.log({ state: this.state });
    const { users } = this.state;
    return users.map((user) => (
      <UserCard user={user} key={user.id}/>
    ));
  }
  render() {
    return (
      <>
        <Card.Group itemsPerRow={4}>
          {this.renderUserCard()}
        </Card.Group>
      </>
    );
  }
}

export default Home;
