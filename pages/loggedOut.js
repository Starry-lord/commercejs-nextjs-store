import React from 'react';
import Root from '../components/common/Root';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/common/Footer';

const LoggedOut = () => (
  <Root>
    <Head>
      <title>Hathor Voyance</title>
    </Head>
    <div className="account-container">
      <div className="custom-container py-5 my-4 my-sm-5">
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h2 className="font-size-header mb-4 pt-5">
              Vous vous êtes déconnecté avec succès.
            </h2>
            <Link href="/" className="mt-4">
              <a>Continuez votre shopping</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default LoggedOut;
