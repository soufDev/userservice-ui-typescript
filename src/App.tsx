import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import AddForm from './components/User/Add';
import EditForm from './components/User/Edit';
import DeleteForm from './components/User/Delete';

class App extends React.Component {
  state = {};
  
  render() {
    return (
      <>
        <Router>
          <>
            <Header />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/users" component={User} />
                <Route path="/user/new" component={AddForm} />
                <Route path="/user/edit/:id" component={EditForm} />
                <Route path="/user/delete/:id" component={DeleteForm} />
                <Route component={() => <h1>NOT FOUND</h1>} />
              </Switch>
            </Container>
          </>
        </Router>
      </>
    );
  }
}

export default App;
