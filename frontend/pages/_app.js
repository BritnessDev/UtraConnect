import '../styles/theme.scss';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { NewSidenav } from '../components';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const authPages = [
    '/error-illustration',
    '/error',
    '/password-reset-cover',
    '/password-reset-illustration',
    '/password-reset',
    '/sign-in-cover',
    '/sign-in-illustration',
    '/sign-in',
    '/sign-up-cover',
    '/sign-up-illustration',
    '/sign-up',
  ];

  return (
    <>
      <Provider store={store} >
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
          <title>Dashkit React</title>
        </Head>
        <SSRProvider>
          {!authPages.includes(router.pathname) && <NewSidenav />}
          <Component {...pageProps} />
        </SSRProvider>
      </Provider>
    </>
  );
}

export default MyApp;
