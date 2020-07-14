const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/Map.js";import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export class MyMap extends React.Component {

    render() {
        let position = [51.505, -0.09]
        let map = (
            React.createElement(Map, { center: position, zoom: 13, __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
              , React.createElement(TileLayer, {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: "© <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
              )
              , React.createElement(Marker, { position: position, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
                , React.createElement(Popup, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, "A pretty CSS3 popup."   , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} ), "Easily customizable." )
              )
            )
          )
          return map;
    }
    
    
    
}

