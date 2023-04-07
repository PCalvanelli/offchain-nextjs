import React from 'react';
import { Card, Container, Grid, Header, Icon } from 'semantic-ui-react';

const Features = () => {
  return (
    <Container style={{ padding: '2em' }}>
      <Header as='h1' textAlign='center'>
        Key Features
      </Header>
      <Grid columns={3} stackable doubling>
        <Grid.Row>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Robust Data</Card.Header>
                <Card.Description>
                  <ul>
                    <li>Conduct longitudinal analysis of digital asset adoption behavior</li>
                    <li>Track changes in adoption sentiment over time and space</li>
                    <li>Statistically significant and random sample size of United States respondents</li>
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Actionable Predictions</Card.Header>
                <Card.Description>
                  <ul>
                    <li>Identify temporal patterns</li>
                    <li>Analyze individual-level changes</li>
                    <li>Model dynamic relationships</li>
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Large and Growing</Card.Header>
                <Card.Description>
                  <ul>
                    <li>Largest and fastest growing dataset on digital asset adoption</li>
                    <li>Over 200 unique data points</li>
                    <li>Over 5,000 unique and randomly sampled respondents</li>
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Interoperability</Card.Header>
                <Card.Description>
                  <ul>
                    <li>Cross-platform compatibility</li>
                    <li>Wide-ranging app integration</li>
                    <li>RESTful architecture</li>
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Community Engagement</Card.Header>
                <Card.Description>
                  <ul>
                    <li>Community driven data collection and analysis</li>
                    <li>Community driven survey design and development</li>
                    <li>Community driven data visualization</li>
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid className="my-card" style={{ padding: '1em', height: '100%' }}>
              <Card.Content>
                <Card.Header>Customizable</Card.Header>
                <Card.Description>
                  <p>Customize your data selection and analysis to suit your unique business needs.</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Features;
