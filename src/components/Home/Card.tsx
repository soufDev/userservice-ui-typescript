import * as React from 'react';
import { User } from '../../entities/User';
import { Card, Icon, Image } from 'semantic-ui-react';

interface Props {
  user: User;
}
const defaultProps = {
  users: {}
};

class UserCard extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    return (
      <Card>
        <Image src={this.props.user.picture} />
        <Card.Content>
          <Card.Header>{this.props.user.name.first}</Card.Header>
          <Card.Meta>
            <span className="date">Born in {this.props.user.birthDate}</span>
          </Card.Meta>
          <Card.Description >
            {this.props.user.about}
          </Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <Icon name="user" />
          {this.props.user.friends.length} friends
        </Card.Content>
      </Card>
    );
  }
}

export default UserCard;
