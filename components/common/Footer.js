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
                href="mailto:hathor@hathor-voyance.ch?subject=Demande%20de%20contact"
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
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column align-items-center justify-content-between">
          <div className="font-color-brand font-size-caption py-4">
          <a
              href="https://starrylord.ch/"
              className="font-color-brand font-size-caption text-uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ by Starry-Lord, 2022 - { new Date().getFullYear() }
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
