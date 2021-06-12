import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>

            <title>Ibrahim BIDI</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        </Head>

        <Component {...pageProps} />
    </>
}

export default MyApp
