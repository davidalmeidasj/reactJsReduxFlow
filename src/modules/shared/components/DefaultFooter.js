import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    return (
      <React.Fragment>
        <span><a href="https://github.com/davidalmeidasj">Git</a> &copy; 2018.</span>
        <span className="ml-auto">Powered by <a href="https://reactjs.org/"> React</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
