/**
 * Modal
 */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';

/**
 * Internal dependencies
 */
import './style.less';
import Button from '../Button';

class Modal extends PureComponent {
  render() {
    const customStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      },
      content: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '460px',
        height: '272px',
        border: 'none',
        borderTop: '6px solid #484b53',
        background: '#fff',
        boxShadow: '0 6px 24px 0 rgba(0,0,0,0.06)',
        borderRadius: '4px',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        padding: '20px',
        textAlign: 'center',
      }
    };
    return (
      <div className="modal-component">
        <ReactModal
          isOpen={this.props.isOpen}
          style={customStyle}
          contentLabel="Modal"
        >
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
          <div>
            <Button className="modal-button-back" onClick={this.props.back}>返回</Button>
            <Button bordered={true} onClick={this.props.confirm}>确认</Button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  confirm: React.PropTypes.func,
  back: React.PropTypes.func,
};

export default Modal;
