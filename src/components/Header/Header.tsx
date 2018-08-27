import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { SyntheticEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface HeaderProps {
  history?: {
    push: (path: string) => void;
  };
}

export interface HeaderState {
  activeItem: string;
}

class Header extends React.Component<HeaderProps & RouteComponentProps<{history?: Object}>, HeaderState> {
  state: HeaderState = {
    activeItem: 'home'
  };

  handleItemClick = (event: SyntheticEvent<{target: Object}>, data: { name: string, active: boolean }) => {
    const { history } = this.props;
    const path = data.name === 'home' ? '/' : data.name;
    history.push(path);
    this.setState({ activeItem: path });
  }

  menuItemRender() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu.Item />
        <Menu.Item
          name=""
          active={activeItem === ''}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />Home
        </Menu.Item>
        <Menu.Item
          name="user"
          active={activeItem === 'users'}
          onClick={this.handleItemClick}
        >
          <Icon name="users" />Users
        </Menu.Item>
      </>
    );
  }
  render() {
    return (
      <Menu size="huge" color="teal" attached={true} inverted={true}>
        {this.menuItemRender()}
      </Menu>
    );
  }
}

export default withRouter(Header);
