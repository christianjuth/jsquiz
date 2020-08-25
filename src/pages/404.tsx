import * as React from 'react';
import Router from 'next/router';
import { Theme, Section, Navbar, Footer, Text } from '../components';
import { styleHelpers } from '../utils';
import Div100vh from 'react-div-100vh';

function Index() {

  React.useEffect(() => {
    if(Router.pathname !== '/' ){
      Router.push('/')
    }
  }, []);

  const styles = Theme.useStyleCreator(styleCreator);
  
  return (
    <div style={{flex: 1}}>
      <Navbar/>

      <Div100vh style={styles.page}>
        <Navbar.Spacer/>
        <div style={styles.grow}/>
        <Section styleInside={styles.column}>
          <Text variant='h2'>404. Page not found.</Text>
          <Text variant='p'>You will be redirected...</Text>
        </Section>
        <div style={styles.grow}/>

        <Footer/>
      </Div100vh>

    </div>
  );
}

const styleCreator = Theme.makeStyleCreator(theme => ({
  page: {
    ...styleHelpers.flex('column')
  },
  grow: {
    flex: 1,
    maxWidth: '100%'
  },
  column: {
    ...styleHelpers.flex('column')
  }
}));

export default Index;