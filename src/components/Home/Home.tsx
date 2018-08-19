import * as React from 'react';

export interface HomeProps {

}

export interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
  state: HomeState = { };

  render() {
    return (
      <h1>Home</h1>
    );
  }
}

export default Home;
