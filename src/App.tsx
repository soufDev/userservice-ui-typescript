import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Router>
          <>
            <Header />
            <Container style={{ marginTop: '7em' }}>
              <Route exact={true} path="/" component={Home} />
              <Route path="/user" component={User} />
            </Container>
          </>
        </Router>
      </>
    );
  }
}

export default App;
