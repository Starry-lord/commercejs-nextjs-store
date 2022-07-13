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
              <h4 className="font-size-subheader">
              Adepte de la pensée positive et bienveillante, passionnée de numérologie, je pratique le tirage de divers Tarots et Oracles depuis l’âge de 20 ans.</h4>
              <h4 className="font-size-subheader">Tout au long de ma vie j’ai communiqué et médité avec mes cartes, auxquelles j’ai demandé de nombreux conseils pour gérer tout d’abord ma vie ensuite pour gérer l’éducation de mes 4 enfants, qui sont adultes maintenant. </h4>
              <h4 className="font-size-subheader">J’ai souvent été amenée à utiliser mon expérience, dans la lecture des cartes, pour aider mes proches, mes amis, et leurs amis dans leurs multiples questionnements. </h4>
              <h4 className="font-size-subheader">A l’heure actuelle je dispose de temps libre et je souhaite partager cette grande expérience avec le public.</h4>
              <h4 className="font-size-subheader">Je réponds aux questions les plus disparates alors n’hésitez pas à me contacter.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/Post-1.jpeg" alt="Hathor"/>

            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="align-items-center justify-content-center h-100">
              <img className="mb-5" src="/images/insta/1.png" alt="Numérologie" width={600} height={600}/>
              <img src="/images/insta/small.jpg" alt="Numérologie" width={600} height={600}/>
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
            <i className="font-size-subheader">Ce qui devient prioritaire cette année sont l’éducation, l’équilibre, les responsabilités, les choix judicieux. C’est L’année de la santé, du social, comme une sorte de pause après l’année 5 (2021), pour régulariser, stabiliser ce qui avait été entrepris. On cherche la paix, et on trouve parfois la guerre… Les mariages sont en nette augmentation, les naissances également, mais aussi les divorces et les ruptures. Les responsabilités internationales, la pédagogie et la culture dans le monde, les problèmes de santé et de soins, l’économie des foyers, tout cela touche à une recherche d’harmonisation qui aboutit… ou pas. N’oublions pas que le 6 est le choix.</i>
            <i className="mb-5">Les nombres et leurs secrets; Philippe de Louvigny/Editions Nathan/février 1989</i>

            <h3 className="mb-4">Plusieurs études numérologiques</h3>

<h5 className="mb-3">La personnalité, le nombre intérieur et le nombre extérieur</h5>
<ul>
<li><h4 className="font-size-subheader">Vous souhaitez connaître votre personnalité expliquée par les nombres collectés de votre nom de famille (de jeune fille pour les femmes) et vos prénoms?</h4></li>
<li><h4 className="font-size-subheader">Vous souhaitez mieux comprendre le lien avec votre père ou votre mère?</h4></li>
<li><h4 className="font-size-subheader">Vous souhaitez savoir quelle direction prendre professionnellement parlant?</h4></li>
<li><h4 className="font-size-subheader mb-5">Vous êtes chef d’entreprise et vous voulez savoir comment la personne que vous engagez, se conduira professionnellement parlant?</h4></li>
</ul>
<h5>Le chemin de vie, les cycles et les réalisations</h5>

<h4 className="font-size-subheader"><p>vous souhaitez connaître votre chemin de vie, parfois appelé aussi “le destin”?</p> <p>Les 3 cycles et les 4 réalisations de 0 à a 100 ans ?</p></h4>

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

<h4 className="font-size-subheader mb-5">Affectif, professionnel, financier et santé.
Peut-être avez vous simplement besoin d’un conseil dans une situation donnée?</h4>

<h5>Exemples de tirages pour l’affectif:</h5>
<ul>
<li><h4 className="font-size-subheader">&quot;Vais-je bientôt faire une rencontre?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est- ce que la personne qui m’intéresse est un ou une possible partenaire?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce que mon couple va bien malgré les difficultés?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce que mon couple va vers une rupture ou un divorce?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce que le divorce est la meilleure solution?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce que une réconciliation est possible?&quot;
</h4></li></ul>

<h5>Exemples de tirages pour le domaine professionnel:</h5>
<ul>
<li><h4 className="font-size-subheader">&quot;Vais-je bientôt trouver un emploi qui me conviendra?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Comment évolue ma situation professionnelle?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Je rencontre des difficultés sur mon lieu de travail, vais-je conserver mon emploi?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Y a-t-il une possibilité d’évolution de carrière?&quot;</h4></li>
</ul>
<h5>Exemples de tirages pour le domaine financier:</h5>
<ul>
<li><h4 className="font-size-subheader">&quot;Comment évoluent mes finances suite à mes investissements?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Vais-je pouvoir améliorer ma situation financière et la stabiliser?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce une bonne décision que de faire un achat immobilier en ce moment?&quot;</h4></li>
</ul>
<h5>Exemples de tirages pour la santé</h5>
<ul>
<li><h4 className="font-size-subheader">&quot;Vais-je pouvoir guérir de cette maladie chronique?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Puis-je faire confiance aux conseils de mon médecin?&quot;</h4></li>
<li><h4 className="font-size-subheader">&quot;Est-ce que une opération peut être évitée ou alors être nécessaire?&quot;</h4></li></ul>
<h5>
Le tirage complet</h5>
<h4 className="font-size-subheader">Un tirage complet vous est également proposé. Dans ce cas, je vous parlerai des influences actuelles dans tous le domaines de votre vie avec une estimation de la durée de réalisation.</h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="align-items-center justify-content-center h-100">
              <img className="mt-5 mb-5" src="/images/home-2.jpg" alt="Tarot 1" width={600} height={420}/>
              <img src="/images/explore-banner.png" alt="Tarot 2" width={600} height={754}/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/insta/4.webp" alt="Prénom du bébé" width={600} height={450}/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
            Étude du prénom
            </h3>
            
            <h5>Le choix du prénom</h5>
            <div className="mt-3">
              <ul>
            <li><h4 className="font-size-subheader mb-4">Vous cherchez un prénom pour votre enfant à venir?</h4></li>
            <li><h4 className="font-size-subheader mb-4">Vous souhaitez mieux comprendre la personnalité liée au prénom que vous avez choisi pour vos enfants?</h4></li>
            <li><h4 className="font-size-subheader mb-4">Vous souhaitez tout simplement connaître le caractère, le signe du zodiac, le végétal, l’animal, la couleur, liés aux prénoms choisi?</h4></li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
