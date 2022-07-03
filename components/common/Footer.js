import React from 'react';
import Image from 'next/image'

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            À propos du site
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://commercejs.com/docs/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation commerce.js
              </a>
              <a
                href="https://commercejs.com/features"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fonctionalités
              </a>
            </div>
            <div>
              <a
                href="https://starrylord.ch"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Made with ❤️ by Starry-Lord
              </a>
              <a
                href="https://twc1rcle.com/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Communauté Anglophone
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Suivez-nous
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/starryl0rd"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter Starry-Lord
              </a>
              <a
                href="https://www.instagram.com/hathor.voyance"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram hathor.voyance
              </a>
            </div>
            <div>
              <a
                href="https://angel.co/company/chec"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                test
              </a>
              <a
                href="https://www.linkedin.com/in/sami-chakrouns/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn du webmaster
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <Image src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon" width={32} height={32}/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            <a
              href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployez sur Netlify
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clonez dans GitHub
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Template
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://starrylord.ch/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } Chec/Commerce.js &amp; Starry-Lord.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
