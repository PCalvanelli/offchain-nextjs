import Link from 'next/link';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='About Off Chain Data' />
              <p>Off Chain Data is a platform that collects and shares qualitative data related to the adoption of digital assets. Our open-source repository is a valuable resource for individuals and organizations looking to gain insights into how digital assets are being used and adopted across different industries and regions. By providing easy access to this data, we aim to support informed decision-making and drive innovation in the digital asset space.</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Resources' />
              <List link inverted>
                <List.Item>
                  <Link href="https://peter-calvanelli.gitbook.io/off-chain-data/" passHref>
                    <List.Content style={{ cursor: 'pointer' }}>Documentation</List.Content>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="https://peter-calvanelli.gitbook.io/off-chain-data/faqs" passHref>
                    <List.Content style={{ cursor: 'pointer' }}>FAQ</List.Content>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/blog" passHref>
                    <List.Content style={{ cursor: 'pointer' }}>Blog</List.Content>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact Us' />
              <List link inverted>
                <List.Item><span style={{ cursor: 'pointer' }}>support@offchaindata.xyz</span></List.Item>
                <List.Item><span style={{ cursor: 'pointer' }}>Twitter</span></List.Item>
                <List.Item><span style={{ cursor: 'pointer' }}>GitHub</span></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container textAlign='center'>
        <p>&copy; 2023 Off Chain Data</p>
      </Container>
    </Segment>
  );
};

export default Footer;
