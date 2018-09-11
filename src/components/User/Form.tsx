import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { SyntheticEvent } from 'react';
import { User } from '../../entities/User';

interface Props {
  onChange?: (event: SyntheticEvent) => void;
  title: string;
  user?: User;
}

const defaultProps = {
  title: '',
  user : {
    id: '',
    username: '',
    email: '',
    name: { first: '', last: '' },
    birthDate: '',
    phoneNumber: '',
    about: '',
    isActive: false,
    address: '',
    picture: '',
    friends: [
      { id: 0, name: '' }
    ],
  },
};

const UserForm: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <>
      <h1>User</h1>
      <Form>
        <Form.Field>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="First Name" value={props.user.name.first} />
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
            onChange={() => console.log('onChange')}
          />
          <Form.Radio
            label="Disable"
            value="Disable"
            checked={false}
            onChange={() => console.log('onChange')}
          />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
      </Form>
    </>
  );
};
UserForm.defaultProps = defaultProps;
export default UserForm;
