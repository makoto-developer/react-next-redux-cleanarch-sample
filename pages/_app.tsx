import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../components/Theme';
import "../styles/global.css";
import { Provider } from 'react-redux';
import createStore from '../ducks/createStore';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={createStore()}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default CustomApp;

