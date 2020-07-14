const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/AlertTextContainer.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import _ from 'lodash';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MoreInfo } from './MoreInfo';


export class AlertTextContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { dropdownOpen: [] };
      this.toggleDropdown = this.toggleDropdown.bind(this);


    }

    componentDidMount() {
      let stationsWithDropDown = this.props.alerts.map( () => {
        return false;
      });
      this.setState({
        dropdownOpen: stationsWithDropDown
    });
    }

    render() {
      

      if(this.props.alerts.length === 0)  return(null);
      let alerts = this.props.alerts.map((alert, index) => {
        return (
          React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}


          , React.createElement('li', { className: "ph3 pv3 bb b--light-silver"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
                    , React.createElement('ul', { key: index, className: "list pl0 mb2 ml4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
                      , React.createElement('li', { className: "dib mr4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
                          , React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
                          , alert.attributes.effect
                          )
                      )
                      , React.createElement('div', { className: "dib bg-moon-gray" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
                          , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 46}} 
                            , alert.attributes.lifecycle
                          )
                      )
                    )
                )
                , React.createElement('div', { className: "ml4 flex mb2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                    , React.createElement('div', { className: "w-90", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
                      , alert.attributes.header
                    )
                    , React.createElement('div', { className: "w-10", onClick:  () => this.toggleDropdown(index) , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
                      , this.state.dropdownOpen[index]
                      ? React.createElement(FontAwesomeIcon, { className: "flex justify-center content-center ml4"   , icon: faCaretUp, size: "1x", __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}})
                      : React.createElement(FontAwesomeIcon, { className: "flex justify-center content-center ml4"   , icon: faCaretDown, size: "1x", __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}} )

                      

                    )
                )
                , React.createElement(MoreInfo, { isOpen: this.state.dropdownOpen[index], 
                          text: alert.attributes.description, __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}

                )


              )
              )
        )
      })
        return(
          React.createElement('article', { class: "pa3 pa5-ns" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
            , React.createElement('ul', { className: "list pl0 ml0 center mw6 ba b--light-silver br2"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}

              , alerts
            )
        )
            
        );
    }


    toggleDropdown(index) {
      console.log(index)
      let openStates = [...this.state.dropdownOpen];    
      openStates[index] = !openStates[index];                
      this.setState({ dropdownOpen: openStates });
      
  }
    

  }
