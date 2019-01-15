import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from '@rndm/render';
import state from './_redux/state';
import reduce from './_utils/reduceArgs';

class Multivariant extends Component {

  shouldComponentUpdate(next) {
    return next.state !== this.props.state;
  }

  getOutput() {
    const { args, rndm, state } = this.props;
    return args.reduce(reduce(rndm, state), rndm);
  };

  render() {
    const output = this.getOutput();
    return render(output);
  }
}

export default connect(state)(Multivariant);
