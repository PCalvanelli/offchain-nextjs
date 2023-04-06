import React from 'react';
import { Button, ButtonGroup, Container, Grid, Icon } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";
import Terminal from '@/components/Terminal';

const Hero = () => {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [csvUrl, setCsvUrl] = React.useState('');

  React.useEffect(() => {
    const fetchCsvUrl = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          const response = await fetch('https://zgjfvxglyiydrytbhuwc.supabase.co/storage/v1/object/public/public/sample/demo-survey-sept-22.csv', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            setCsvUrl(data.url);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchCsvUrl();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={8} largeScreen={8} widescreen={8}>
            <h1>Qualitative data,</h1>
            <h1>user-friendly API,</h1>
            <h1>
              <span className="ui black">
                improve your models
              </span>
            </h1>
            <p>
              Gain powerful insights with proprietary data previously used by research teams at investment firms and universities.
              Get knowledge fast and flexibly. Unlock the full potential of your large language model.
            </p>
            <ButtonGroup attached={false}>
              <Button basic primary size='large' onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
                Get Started<Icon name='right chevron' />
              </Button>
              {csvUrl && (
                <Button basic as='a' href={csvUrl} download size='large' className='secondary' style={{ marginLeft: '10px', borderRadius: '5px' }}>Download Sample Data<Icon name='right chevron' /></Button>
              )}
              <Button basic as='a' href='https://peter-calvanelli.gitbook.io/off-chain-data/' size='large' style={{ marginLeft: '10px', borderRadius: '5px' }}>Read Docs<Icon name='right chevron' /></Button>
            </ButtonGroup>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={6} largeScreen={6} widescreen={6}>
            <Terminal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Hero;
