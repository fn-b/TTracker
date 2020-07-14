const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/Tile.js";import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";




export class Tile extends Component {

  constructor(props) {
    super(props);
    

  }



  render() {
    return (
      React.createElement('div', { className: "fl ma2 bg-white bg-gray0-d overflow-hidden"    ,
           style: { height: '126px', width: '126px' }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
               , React.createElement('div', { className: "w-100 h-100 relative bg-white bg-gray0-d ba b--black b--gray1-d"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
                   , React.createElement(Link, { className: "w-100 h-100 db pa2 no-underline"    , to: this.props.linkPath, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
                       , React.createElement('p', { className: "black white-d absolute f9"   , style: {left: '8px', top: '8px'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, this.props.pageName)
                       , React.createElement('div', { className: "absolute invert-d" , style: {top: '45px', left: '45px'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
                       , React.createElement(FontAwesomeIcon, { icon: this.props.tileIcon, size: "3x", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}} )
                       )

                    )

                )

      )
    );
  }

}