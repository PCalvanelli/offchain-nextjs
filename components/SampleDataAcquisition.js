import React from 'react';
import { Step, Icon } from 'semantic-ui-react';

function SampleDataAcquisition() {
  return (
    <Step.Group fluid>
      <Step active>
        <Icon name='user' />
        <Step.Content>
          <Step.Title>Create Account and Sign Up</Step.Title>
          <Step.Description>Enter your email address to create an account and sign up.</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled >
        <Icon name='mail' />
        <Step.Content>
          <Step.Title>Verify Email Address</Step.Title>
          <Step.Description>A verification email will be sent to your email address.</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled >
        <Icon name='download' />
        <Step.Content>
          <Step.Title>Receive Sample Dataset</Step.Title>
          <Step.Description>Click the button to receive a sample of the digital asset dataset.</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}


export default SampleDataAcquisition;
