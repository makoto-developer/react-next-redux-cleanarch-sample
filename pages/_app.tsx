import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from '../components/Theme';
import "../styles/global.css";
import { Provider } from 'react-redux';
import createStore from '../ducks/createStore';

const CustomApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Provider store={createStore()}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </AppCacheProvider>
  );
};

export default CustomApp;
