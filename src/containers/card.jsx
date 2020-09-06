import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { selectFlat } from '../actions';

class Card extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render () {
    let containerClasses = "card";
    if (this.props.flat === this.props.selectedFlat) {
      containerClasses += " active";
    }

    return (
      <div className={containerClasses} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),url(${this.props.flat.imageUrl})` }}>
        <div className="card-category">{`${this.props.flat.price} EUR`}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
