import * as React from 'react';

interface Props {
  title: string;
}
class Form extends React.Component<Props> {
  public render() {
    return (
      <h1>{this.props.title}Form</h1>
    );
  }
}

export default Form;
