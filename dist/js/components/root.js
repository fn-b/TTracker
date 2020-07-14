const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import _ from 'lodash';
import { HeaderBar } from "./lib/header-bar.js"
import {Home} from "./Home"
import {Stations} from "./Stations"
import { Alerts } from './Alerts.js';
import { Planner } from './Planner.js';
import { Schedule } from './Schedule.js'
import {Station} from './Station.js'
import {Splash}  from './Splash'
import { api } from '../api';
import {PlannerResult} from './PlannerResult'
import { min } from 'date-fns';


export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = store.state;
  }

  componentDidMount() {
    store.setStateHandler((newState) => {
        this.setState(newState);
    });
    
  }

  render() {
    if(!this.state.alertsLoaded || !this.state.stationsLoaded || !this.state.routesLoaded ) {
      return null;
    }
    
      
  return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
        , React.createElement('div', { className: "absolute h-100 w-100 bg-gray0-d ph4-m ph4-l ph4-xl pb4-m pb4-l pb4-xl"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
          , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
          )
          , React.createElement('div', { className: "cf w-100 flex flex-column pa4 ba-m ba-l ba-xl b--gray2 br1 h-100 h-100-minus-40-m h-100-minus-40-l h-100-minus-40-xl f9 white-d overflow-auto"                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
            , React.createElement(Link, { to: "/~ttracker", __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}, "Home")
             , React.createElement(Route, { exact: true, path: "/~ttracker", render:  () => {
              return (
            React.createElement(Home, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 45}})
                )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
            )
            , React.createElement(Route, { exact: true, path: "/~ttracker/stations", render:  () => {
              
              return (
                React.createElement(Stations, { stops: this.state.stations, routes: this.state.routes, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}})
               )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
            )
            , React.createElement(Route, { exact: true, path: "/~ttracker/alerts", render:  () => {
              if(this.state.alerts )
              return(
                React.createElement(Alerts, { alerts: this.state.alerts, routes: this.state.routes, __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}})
              )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
              )
              , React.createElement(Route, { exact: true, path: "/~ttracker/schedule", render:  () => {
              return(
                React.createElement(Schedule, { routes: this.state.routes, __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
                  )
              )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
              )
              , React.createElement(Route, { exact: true, path: "/~ttracker/planner", render:  () => {
              return(
                React.createElement(Planner, { stops: this.state.stations, __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}})
              )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}})
              , React.createElement(Route, { path: "/~ttracker/stations/:stationName", render:  () => {
                return(
                  React.createElement(Station, { facilities: this.state.facilities, stations: this.state.stations, __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}})
                )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
              )
          )
        )
      )
    )
  }
}

