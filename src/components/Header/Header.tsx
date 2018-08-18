import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.menuItemRender = this.menuItemRender.bind(this);
  }

  menuItemRender() {
    return (
      <>
        <Menu.Item><Icon name="home" />Home</Menu.Item>
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

export default Header;
