import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, Image, Button, Container } from 'semantic-ui-react';

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item header>
          <Image size="mini" src="/hippo_logo-removebg-preview.png" style={{ marginRight: '1.5em', backgroundColor: 'black', borderRadius: '25%' }} />
          Off Chain Data
          <span style={{ fontSize: '14px', marginLeft: '10px', color: '#f2711c' }}>Beta</span>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item href="https://peter-calvanelli.gitbook.io/off-chain-data/">Documentation</Menu.Item>
          <Menu.Item>
            {isAuthenticated ? (
              <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </Button>
            ) : (
              <Button basic onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBar;
