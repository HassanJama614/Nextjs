import Layout from '../components/Layout';
import '../styles/globals.css'; // Keep global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;