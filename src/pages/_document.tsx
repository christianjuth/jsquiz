import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { StyleSheet } from 'react-context-theming/lib/web';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <StyleSheet/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
          <meta name="apple-mobile-web-app-title" content="Notentool"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}