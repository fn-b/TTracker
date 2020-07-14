const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/ButtonList.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import _ from 'lodash';
import { api } from '../api';
 


export class ButtonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.createButtonList(this.props.stationsList,this.props.buttonType, this.props.elementType);
    }
        createButtonList(stationsList, buttonType , elementType) {
            let baseButtonRound = 'w-30  pa3 mr2 tc f6 no-underline br-pill ba bw1 ph3 pv2 mb2 ' 
            let buttonRegular  = baseButtonRound + 'black'
            let buttonSelected = baseButtonRound + 'white bg-black'
            let buttonSquareBase = 'w-30  pa3 mr2 tc f6 no-underline ba bw1 ph3 pv2 mb2 '
            if(buttonType === 'Square') {
                buttonRegular = buttonSquareBase + 'black';
                buttonSelected = buttonSquareBase + 'white bg-black'
            }
            if(elementType === 'Button') {
                let buttons = stationsList.map((station) => {
                    return React.createElement('button', { onClick:  () => this.props.buttonClicked(station.id) , className:  this.props.selected === station.id ? buttonSelected : buttonRegular, __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, station.id)
             
                  })
                  return buttons;
            }
            if(elementType === 'Link') {

                let links = stationsList.map((station) => {
                   
                    
                        return React.createElement(Link, { onClick: () => api.requestFacility(station.relationships.parent_station.data.id), to:  '/~ttracker/stations/' + station.relationships.parent_station.data.id  , className:  buttonRegular, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, station.attributes.name )

                    })
             
                  
                  return links;
            }
            
         }

         
  
}








