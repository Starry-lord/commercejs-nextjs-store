import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>Hathor Voyance</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Mon Histoire
              </h2>
              <h4 className="font-size-subheader mb-4">
              Adepte de la pensée positive et bienveillante, passionnée de numérologie, je pratique le tirage de divers Tarots et Oracles depuis l’âge de 20 ans. Tout au long de ma vie j’ai communiqué et médité avec « mes cartes » auxquelles j’ai demandé de nombreux conseils pour gérer tout d’abord ma vie ensuite pour gérer l’éducation de mes 4 enfants qui sont adultes maintenant. J’ai souvent été amenée à utiliser mon expérience, dans la lecture des cartes, pour aider mes proches dans leurs multiples questionnements. A l’heure actuelle je dispose de temps libre et je souhaite partager cette grande expérience avec le public. Je réponds aux questions les plus disparates alors n’hésitez pas à me contacter.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/Post-1.jpeg" alt="Hathor" layout="responsive"/>

            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/insta/1.png" alt="Numérologie" width={600} height={600}/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
            À propos de numérologie…
            </h3>
            <h4 className="font-size-subheader">
            Nous sommes dans une année universelle 2022 ce qui se réduit à 2+0+2+2=6 cette année universelle 6 nous dit: 
            </h4>
            <h4 className="font-size-subheader mb-4"> 
            Ce qui devient prioritaire cette année sont l’éducation, l’équilibre, les responsabilités, les choix judicieux. C’est L’année de la santé, du social, comme une sorte de pause après l’année 5 (2021), pour régulariser, stabiliser ce qui avait été entrepris. On cherche la paix, et on trouve parfois la guerre… Les mariages sont en nette augmentation, les naissances également, mais aussi les divorces et les ruptures. Les responsabilités internationales, la pédagogie et la culture dans le monde, les problèmes de santé et de soins, l’économie des foyers, tout cela touche à une recherche d’harmonisation qui aboutit… ou pas. N’oublions pas que le 6 est le choix.
            </h4>
            <h6>Les nombres et leurs secrets; Philippe de Louvigny/Editions Nathan/février 1989</h6>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              À propos de Tarologie...
            </h3>
            <h4 className="font-size-subheader mb-4">
            Texte en cours
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/home-2.jpg" alt="Hathor" width={600} height={380}/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/blog-illustration.svg" alt="Commerce.js blog illustration" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Technical Blog
            </h3>
            <h4 className="font-size-subheader mb-4">
              Read the full technical tutorial here if you want to get into the nitty gritty!
            </h4>
            <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
