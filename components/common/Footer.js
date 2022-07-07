import React from 'react';

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
                href="https://instagram.com/hathor.voyance"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="mailto:hathor@hathor-voyance.ch"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="https://spaces.chec.io/44670"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retrouvez le shop ici
              </a>
              <a
                href="tel:+41901588741"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Téléphone 2.50/minute
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Sites partenaires
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href=""
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                partenaire 1
              </a>
              <a
                href=""
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                partenaire 2
              </a>
            </div>
            <div>
              <a
                href=""
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                partenaire 3
              </a>
              <a
                href=""
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                partenaire 4
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
              placeholder="inactive"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://starrylord.ch/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ by Starry-Lord / 2022 - { new Date().getFullYear() }.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
