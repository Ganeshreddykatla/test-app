import Layout from "@/Components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
