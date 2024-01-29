import React from 'react';
import Modal from 'react-modal';
import CloseButton from 'react-bootstrap/CloseButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const assets = require('./Assets.js');

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
        contentLabel="Selected modal"
      >
        <Row>
          <Col className='justify-content-center text-center'>
            <CloseButton onClick={this.handleCloseModal} style={{marginRight: '-1250px'}}/>
            <h2>{this.props.title}</h2>
            <img
              src={assets.default[this.props.src]}
              alt={this.props.alt}
              style={{height: '800px'}}
            />
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center'>
            <br />
            <Button variant="outline-dark" onClick={this.handleCloseModal}>閉じる</Button>{' '}
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default ModalComponent;