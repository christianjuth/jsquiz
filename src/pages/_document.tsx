import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { SEO } from '../components';
import { StyleSheet } from 'react-context-theming/lib/web';

export default class MyDocument extends Document {
  render() {
    let seo = {}
    try {
      seo = this.props.__NEXT_DATA__?.props?.pageProps?.seo || {};
    } catch(e) {}
    
    return (
      <html>
        <Head>
          <StyleSheet/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
          <meta name="apple-mobile-web-app-title" content="Quiz Underreacted"/>
          <SEO {...seo} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}