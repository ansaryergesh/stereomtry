import React, { Component } from "react";
import PropTypes from "prop-types";

class SimpleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { buttonText, children } = this.props;
    const { isOpen } = this.state;
    let openClass = isOpen ? `open` : ``;
    return (
      <div className="modal-wrapper">
        <div id="open-modal" className={`modal-window ${openClass}`}>
          <div>
            <a
              onClick={() => this.setState({ isOpen: false })}
              title="Close"
              className="modal-close"
            >
              Close
            </a>
            {children}
          </div>
        </div>
        <button
          className="btn-content"
          onClick={() => this.setState({ isOpen: true })}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default SimpleModal;

SimpleModal.defaultProps = {
  buttonText: "Click Me!"
};

SimpleModal.propTypes = {
  buttonText: PropTypes.string
};
