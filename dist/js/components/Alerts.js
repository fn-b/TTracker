const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/Alerts.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import _ from 'lodash';
import {StationAlerts} from './StationAlerts'

export class Alerts extends Component {
    constructor(props) {
      super(props);
    }


     


    render() {
        return(
        React.createElement('div', { className: "center mw6 h-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
            , React.createElement('div', { className: "h-100 pt0 pt8-m pt8-l pt8-xl no-scrollbar"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
                , React.createElement('div', { className: "flex justify-between" , style: { marginBottom: 32 }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
                    , React.createElement('div', { className: "flex-col", __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
                        , React.createElement('div', { className: "mb1 f12 center "   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, React.createElement('b', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, " Alerts" ))
                    )
                )
                , React.createElement(StationAlerts, { alerts: this.props.alerts, routes: this.props.routes, __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}

                )


            )

        )
        );
    }
}