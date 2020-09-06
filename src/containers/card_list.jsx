import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { setFlats } from '../actions';
import Card from './card';

class CardList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render () {
    return (
      <div className="flat-list">
        {this.props.flats.map(flat => <Card flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
