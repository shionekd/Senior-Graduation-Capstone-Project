import React from 'react';
import Modal from 'react-modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const assets = require('./assets.js');

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal () {
    this.props.onClose();
  }

  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="Example Modal"
      >
        <Row>
          <Col className='justify-content-center text-center'>
            <h2>{this.props.title}</h2>
            <img
              src={assets.default[this.props.src]}
              alt={this.props.alt}
            />
            <p>{this.props.content}</p>
            <Button variant="primary" onClick={this.handleCloseModal}>閉じる</Button>{' '}
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default ModalComponent;