import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import AddForm from './components/User/Add';
import EditForm from './components/User/Edit';
import DeleteForm from './components/User/Delete';
// @ts-ignore
import Loadable from 'react-loadable';

import Loader from './common/Loader';

const Loading = () => <Loader active={true} size={'massive'} />;
const Home = Loadable({
  loader: () => import('./components/Home/Home'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./components/User/User'),
  loading: Loading,
});

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
