import React from "react";
import App from "next/app";
import Head from 'next/head';
import { useStaticRendering, Provider } from "mobx-react";
import stores from "../stores";
import '../styles/AllStyles.scss';

const isServer: boolean = typeof window === "undefined";
useStaticRendering(isServer);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={stores}>
        <Head>
          <meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					
          {/* <link rel="shortcut icon" href="/assets/icon/shortcut.PNG" /> */}
					<title>TS + Next Template</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
