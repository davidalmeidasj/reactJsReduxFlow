import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  componentDidMount() {

  };

  render() {

    return (
      <React.Fragment>
        <h1>React JS</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    store: store
  }
};

const mapDispatchToProp = dispatch => {
  return {

  }
};

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProp)(DefaultHeader)
