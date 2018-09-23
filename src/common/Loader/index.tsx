import * as React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
  active: boolean;
  size: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

const LoaderComponent = (props: Props) => (
  <Dimmer active={props.active}>
    <Loader size={props.size} />
  </Dimmer>
);

export default LoaderComponent;