import '../index.css';
import NextApp from 'next/app';
import { Theme } from '../components';
import { Provider as ReduxProvider } from '../store';

class App extends NextApp {
  
  render () {
    const { Component, pageProps } = this.props;
    return (
      <ReduxProvider>
        <Theme.Provider>
          <Component {...pageProps}/>
        </Theme.Provider>
      </ReduxProvider>
    );
  }
  
}

export default App;