const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/PlannerResult.js";import React, { Component } from 'react';
import _ from 'lodash';
import {Tile} from "./Tile"
import { faExclamationTriangle, faSubway, faMap, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class PlannerResult extends Component {
    constructor(props) {
      super(props);
        
    }

    render() {
        let search = window.location.search;
      let params = new URLSearchParams(search);
      let foo = params.get('query');
        return(
            React.createElement('h1', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
                , foo
            )
               
        );
        
    }
}