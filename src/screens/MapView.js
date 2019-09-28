import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CurrentLocationMarker from '../components/CurrentLocationMarker'
import { connect } from "react-redux"
import CurrentLocationLabel from '../components/CurrentLocationLabel'

const MapView = (props) => {
  return (
    <div>
    <Map center={[51.504425, 7.526183]} zoom={13}>
    <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
  <CurrentLocationMarker />
</Map>
<CurrentLocationLabel />
</div>
);
}

export default MapView
