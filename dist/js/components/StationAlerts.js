const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/StationAlerts.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import _ from 'lodash';
import {AlertTextContainer} from './AlertTextContainer'
import {ButtonList} from './ButtonList'

export class StationAlerts extends Component {
    constructor(props) {
      super(props);
      this.state = {
          alerts: this.props.alerts,
          lines: this.props.routes
        }
      this.getAlertsByLine = this.getAlertsByLine.bind(this);
      this.getRoutesWithAlerts = this.getRoutesWithAlerts.bind(this);

    }



    render() {
        let routes = this.getRoutesWithAlerts(this.props.alerts,this.props.routes.data);
        console.log(routes)

        return(
        React.createElement('div', { className: "center mw6 h-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}

            , routes.map(line => (
                React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('h1', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, line.id)
            , React.createElement(AlertTextContainer, {
                lineName: line.id,
                alerts: this.getAlertsByLine(this.props.alerts,line.id), __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
            

           )
           )
            
            ))

        )
        );
    }

    getAlertsByLine(stations,lineType) {
        var alerts = _.map(stations.data, function(o) {
            console.log(o.attributes.informed_entity[0]);
            if(o.attributes.informed_entity[0] === null) return undefined;
            if (o.attributes.informed_entity[0].route === lineType) return o;
            
        });
        var without =  _.without(alerts,undefined)
        console.log(without);
            return without;
    }

    getRoutesWithAlerts(alerts,routes) {
        let routesWithAlerts = [];
        for(let route of routes) {
            let numAlerts = this.getAlertsByLine(alerts,route.id).length
            if(numAlerts > 0) {
                routesWithAlerts.push(route);
            }
        }
        return routesWithAlerts;

    }
}