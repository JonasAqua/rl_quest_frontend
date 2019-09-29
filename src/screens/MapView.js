import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CurrentLocationMarker from '../components/CurrentLocationMarker'
import { connect } from "react-redux"
import CurrentLocationLabel from '../components/CurrentLocationLabel'
import LocationSubscriber from '../components/LocationSubscriber'
import LocationUpdater from '../components/LocationUpdater'

const MapView = (props) => {
  return (
    <div>
      <LocationSubscriber />
      <LocationUpdater />
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
