import React, { useEffect, useState } from 'react';
import commerce from '../../lib/commerce';
import { Collapse } from 'react-collapse';
import Head from 'next/head';
import ErrorPage from 'next/error'
import { useRouter } from 'next/router';
import Root from '../../components/common/Root';
import TemplatePage from '../../components/common/TemplatePage';
import CarouselImages from '../../components/productAssets/CarouselImages';
import ProductDetail from '../../components/productAssets/ProductDetail';
import ClientReview from '../../components/productAssets/ClientReview';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import ExploreBanner from '../../components/productAssets/ExploreBanner';
import Footer from '../../components/common/Footer';
import SocialMedia from '../../components/common/SocialMedia';
import CategoryList from '../../components/products/CategoryList';
import reduceProductImages from '../../lib/reduceProductImages';

const detailView = `<p>
  Consultation sur le sujet de votre choix, n'oubliez pas de détailler la question dans les notes si nécéssaire
</p>`;

export default function Product() {
  const router = useRouter();
  const { permalink } = router.query;
  const [showShipping, setShowShipping] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleShipping = () => {
    setShowShipping(!showShipping);
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  useEffect(() => {
    if (!permalink) {
      return;
    }

    const fetchProductByPermalink = async (permalink) => {
      try {
        const product = await commerce.products.retrieve(permalink, { type: 'permalink '});
        setProduct(product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductByPermalink(permalink);
  }, [permalink]);

  if (loading) {
    return <TemplatePage page={ {message: 'Chargement...'} } />
  }

  if (product === null) {
    return <ErrorPage statusCode={404} />
  }

  const images = reduceProductImages(product);
  return (
    <Root>
      <Head>
        <title>{ product.name } | Voyance Digitale </title>
      </Head>

      <div className="py-5 my-5">
      <div className="main-product-content">
        {/* Sidebar */}
        <div className="product-sidebar">
          <CategoryList
            className="product-left-aside__category-list"
            current={ product.categories[0] && product.categories[0].id }
          />
          <CarouselImages images={images} />
        </div>

        <div className="product-images">
          <div className="flex-grow-1">
            {Array.isArray(images) ? (images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="carousel"
                className="w-100 mb-3 carousel-main-images"
              />
            ))) : (
              ''
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="product-detail">
          <ProductDetail product={product} />

          <div
            onClick={toggleShipping}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Délai d&apos;envoi
            <img src="/icon/plus.svg" alt='Shipping and Returns' />
          </div>
          <Collapse isOpened={showShipping}>
            <div className="pb-4 font-color-medium">
              Je vous réponds par e-mail au plus tard 2 semaines après votre commande
              .
            </div>
          </Collapse>
          <div className="h-1 border-bottom border-color-black" />
          <div
            onClick={toggleDetails}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Détails
            <img src="/icon/plus.svg" alt='Details' />
          </div>
          <Collapse isOpened={showDetails}>
            <div
              className="pb-4 font-color-medium"
              dangerouslySetInnerHTML={{
                __html: detailView
              }}
            />
          </Collapse>
          <div className="h-1 borderbottom border-color-black" />
        </div>
      </div>
    </div>

    <ClientReview />
    <SuggestedProducts />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
  );
}
