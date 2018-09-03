import * as React from 'react';
import Form from './Form';
import { Grid, Button } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';

class Edit extends React.Component<RouteComponentProps<{ history: Object }>> {
  public render() {
    return  (
      <>
        <Form title="Edit" />
        <hr/>
        <Grid>
          <Grid.Column width={2} floated="right">
            <Button color="green" >Save</Button>
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <Button onClick={() => this.props.history.push('/users')}>Cancel</Button>
          </Grid.Column>
        </Grid>
      </>

    );
  }
}

export default Edit;
