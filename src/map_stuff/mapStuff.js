import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import "proj4leaflet";
import L from 'leaflet';

const crs = new L.Proj.CRS(
    'EPSG:2400',
    '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 ' +
    '+y_0=0.0 +proj=tmerc +ellps=bessel +units=m ' +
    '+towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs',
    {
        resolutions: [
            8192, 4096, 2048, 1024, 512, 256, 128,
            64, 32, 16, 8, 4, 2, 1, 0.5
        ],
        transformation: new L.Transformation(1, 0, -1, 0),
        origin: [0, 0]
    });

class MapStuff extends Component {

  constructor() {
      super()
      this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13
      }
    }

  componentDidMount() {
      let element = ReactDOM.findDOMNode(this)

      setTimeout(() => {
        this.map = new L.map(element, {
            center: new L.LatLng(41.019829, 28.989864),
            zoom: 14,
            maxZoom: 18,
            layers: new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        })
      }, 2000)
    }

    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <div id="map">
        </div>
      );
  }
}

export default MapStuff;
