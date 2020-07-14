const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/Home.js";import React, { Component } from 'react';
import _ from 'lodash';
import {Tile} from "./Tile"
import { faExclamationTriangle, faSubway, faMap, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Home extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}

          , React.createElement(Tile, { linkPath: "/~ttracker/stations", pageName: "Stations", tileIcon: faSubway, __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}

          )
          , React.createElement(Tile, { linkPath: "/~ttracker/planner", pageName: "Trip Planner" ,  tileIcon: faSearchLocation, __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}

          )
          , React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d overflow-hidden"    ,
           style: { height: '126px', width: '126px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
               , React.createElement('div', { className: "w-100 h-100 relative bg-white bg-gray0-d ba b--black b--gray1-d"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
               , React.createElement('a', { className: "w-100 h-100 db pa2 no-underline"    , target: "_blank", rel: "noopener noreferrer" , href: "https://cdn.mbta.com/sites/default/files/route_pdfs/2020-spring/rtRapid.pdf", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
                       , React.createElement('p', { className: "black white-d absolute f9"   , style: {left: '8px', top: '8px'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Maps and Schedule "   )
                       , React.createElement('div', { className: "absolute invert-d" , style: {top: '45px', left: '45px'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
                       , React.createElement(FontAwesomeIcon, { icon: faMap, size: "3x", __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}} )
                       )

                    )

                )

      )
          , React.createElement(Tile, { linkPath: "/~ttracker/alerts", pageName: "Alerts", tileIcon: faExclamationTriangle, __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}

          )

            )
               
        );
        
    }
}