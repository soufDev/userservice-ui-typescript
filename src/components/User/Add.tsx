import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import UserForm from './Form';

class Add extends React.Component {
  public render() {
    return (
      <>
        <UserForm title="Add" />
        <hr/>
        <Grid>
          <Grid.Column width={2} floated="right">
            <Button color="green" >Save</Button>
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <Button>Cancel</Button>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Add;
