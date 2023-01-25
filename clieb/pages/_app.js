import '../public/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '../context';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastContainer
        position='top-center'
        theme='dark'
      />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
