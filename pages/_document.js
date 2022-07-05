// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta name="title" content="Hathor Voyance" key="title" />
          <meta name="description" content="Voyance et numérologie, depuis plus de 45 ans." />
          <meta property="og:title" content="Hathor Voyance | Voyance Digitale" />
          <meta property="og:image" content="https://hathor-voyance.ch/images/home-1.jpg" />
          <meta property="og:description" content="Voyance et numérologie, depuis plus de 45 ans." />
          <meta property="og:url" content="https://hathor-voyance.ch" />
          <meta property="twitter:title" content="Hathor Voyance | Voyance Digitale" />
          <meta name="twitter:creator" content="@starryl0rd" />
          <meta property="twitter:image" content="https://hathor-voyance.ch/images/home-1.jpg" />
          <meta property="twitter:description" content="Voyance et numérologie, depuis plus de 45 ans." />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
