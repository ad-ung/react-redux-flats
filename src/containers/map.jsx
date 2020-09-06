import { connect } from 'react-redux';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/marker';

class Map extends Component {

  render () {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <Marker lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng} />;
      center = { lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng };
    }

    return (
      <div className="map-container">
        <GoogleMapReact defaultCenter={center} defaultZoom={12}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps)(Map);
