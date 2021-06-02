import React, { Component } from 'react';


import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .addEventListener('click', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    document
      .getElementById('overlay')
      .removeEventListener('click', this.closeModal);
  }

  closeModal = event => {
    if (
      event.target.nodeName === 'INPUT' ||
      event.target.nodeName === 'LI' ||
      event.target.innerText === 'Добавить'
    ) {
      return;
    }
    if (event.code === 'Escape') {
      this.props.onModalToggle();
    } else {
      this.props.onModalToggle();
    }
    this.removeScroll();
  };

  removeScroll = () => {
    document.body.classList.remove('stopScroll');
  };

  render() {
    return (
      <>
        <div id="overlay" className={styles.overlay}>
          <div className={styles.modal}>
            <button
              type="button"
              onClick={this.props.onModalToggle}
              className={styles.closeModalBtn}
            >
              <img
                // src={closeModalBtn}
                alt="close-modal"
                className={styles.closeModalImg}
              />
              <img
                // src={goBackBtn}
                alt="close-modal"
                className={styles.goBackImg}
              />
            </button>
           
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
