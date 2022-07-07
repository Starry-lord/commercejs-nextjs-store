import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Sympathique et empathique',
    description: 'J\'avais besoin d\'un tirage rapide pour prendre une décision importante qui me semblait trop dure à prendre, et j\'ai pu trouver une personne chaleureuse et compatissante au bout du fil. Merci Hathor, je rappelerai.',
    reviewBy: 'Phillipe T.',
    date: 'Juillet, 2022'
  },
  {
    stars: '4.5',
    title: 'MAMAAAAAAAA',
    description:
      'Oooooooooooh! ...',
    reviewBy: 'Freddy M.',
    date: 'Juin, 2022'
  },
  {
    stars: '4',
    title: 'Robert Junior',
    description:
      'Mon mari et moi nous avions beaucoup de mal à trouver le nom du bébé, mais grace à Hathor-Voyance, nous avons pu nous décider! Le petit Robert fait 3,5 kilos, mais c\'est mon mari qui à gagné...',
    reviewBy: 'Luisa J.',
    date: 'Mars, 2022'
  },
  {
    stars: '5',
    title: 'Voyante Sympa!',
    description:
      'J\'ai trouvé le tirage super sympa, je recommande Hathor pour son expérience. J\'ai reçu mon tirage beacoup plus vite que je ne pensais, et ca a été le coup de pouce qu\'il me fallait pour prendre ma décision.',
    reviewBy: 'Pascale C.',
    date: 'Janvier, 2022'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              Commentaires clients
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3/5 pour 10 clients satisfaits
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                Tous les commentaires clients
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
