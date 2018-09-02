import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { SyntheticEvent } from 'react';

interface Props {
  onChange?: (event: SyntheticEvent) => void;
  title: string;
}

class UserForm extends React.Component<Props> {
  public render() {
    const { onChange, title } = this.props;
    return (
      <>
        <h1>{title} User</h1>
        <Form>
          <Form.Field>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First Name" value={''} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last Name" value={''} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" value={''} />
          </Form.Field>
          <Form.Group inline={true}>
            <label htmlFor="">Active</label>
            <Form.Radio
              label="Enabled"
              value="enable"
              checked={true}
              onChange={onChange}
            />
            <Form.Radio
              label="Disable"
              value="Disable"
              checked={false}
              onChange={onChange}
            />
          </Form.Group>
          <Form.TextArea label="About" placeholder="Tell us more about you..." />
        </Form>
      </>
    );
  }
}

export default UserForm;
