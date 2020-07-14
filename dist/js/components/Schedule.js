const _jsxFileName = "/home/nick/Urbit/urbit-v0.10.4-linux64/TTracker/src/js/components/Schedule.js";import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import _ from 'lodash';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { ButtonList } from './ButtonList';
import {AlertTextContainer} from './AlertTextContainer'

import Select from 'react-select'




export class Schedule extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedLine: 'Red Line',
        selectedStation: '',
        selectedDirection: '',
        selectedInfoType: 'Schedule',
        lines: [['Red Line', 'Mattapan Trolley', 'Orange Line'], ['Blue Line', 'Green Line', 'B'], ['C','D','E']],
        selectedDate: '',
        alerts: {
          redStations: [
            {
              alertType: 'Station Issue',
              timeline: 'Ongoing',
              previewMessage: 'Beginning Wednesday, April 15, the main entrance and exit to the Alewife garage will be closed for two weeks for construction. Please follow posted signs to access the garage. Customers will only be able to use PayByPhone to pay for parking.',
              showMore: 'To access the garage drivers will use the spiral exit ramp which will be reconfigured for two-way traffic. Customers will enter the garage on the 4th level and exit from the 3rd level. \r\n\r\nPayByPhone must be used to pay for parking during this closure. Cash will not be accepted. Payment can be made via the PayByPhone app, website or by calling 1-866-234-7275. The location code is for the garage is 4395'
            },
            {
              alertType:'Station Issue',
              timeline:'Ongoing',
              previewMessage:"Beginning Wednesday, April 15, the main entrance and exit to the Alewife garage will be closed for two weeks for construction. Please follow posted signs to access the garage. Customers will only be able to use PayByPhone to pay for parking.",
              showMore:'To access the garage drivers will use the spiral exit ramp which will be reconfigured for two-way traffic. Customers will enter the garage on the 4th level and exit from the 3rd level. \r\n\r\nPayByPhone must be used to pay for parking during this closure. Cash will not be accepted. Payment can be made via the PayByPhone app, website or by calling 1-866-234-7275. The location code is for the garage is 4395'
            }
        ],
        orangeLine: [
          {
              alertType:'Service Change',
              timeline:'Ongoing',
              previewMessage:"North Station will be bypassed southbound on weekends from June 6 - 7 to July 11 - 12 beginning Friday evenings at 8:45 PM. Customers can exit at Haymarket and transfer to the Green Line or Orange Line to return to North Station",
              showMore:'Regular service will operate on July 4th Weekend. North Station northbound is scheduled to be bypassed for five weekends beginning July 17. This platform closure is to allow for maintenance work at the station. '
          }
        ]
  
        }

          
      }

      this.switchSelectedLine = this.switchSelectedLine.bind(this);
      this.switchSelectedInfoType = this.switchSelectedInfoType.bind(this);
      this.handleStationChange = this.handleStationChange.bind(this);
      this.handleDirectionChange = this.handleDirectionChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);

    }

    

    


    render() {
        console.log(this.state);
        console.log(this.allFieldsSet())
        let baseButton = 'w-30 pa3 mr2 tc f6 no-underline br-pill ba bw1 ph3 pv2 mb2 ' 
        let buttonRegular  = baseButton + 'black'
        let buttonSelected = baseButton + 'white bg-black'
        let buttonSquareBase = 'w-30 pa3 mr2 tc f6 no-underline ba bw1 ph3 pv2 mb2 '
        let buttonSquareRegular = buttonSquareBase + 'black'
        let buttonSquareSelected = buttonSquareBase + 'white bg-black'

      

        return(
            React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
                , React.createElement('hr', { className: "mt3", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}})
                , React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Line:"

                )

                , React.createElement('div', { className: "flex flex-wrap mt2 "   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}

                    , React.createElement(ButtonList, { stationsList: this.state.lines[0],
                                buttonType: "Round",
                                buttonClicked: this.switchSelectedLine,
                                selected:  this.state.selectedLine,
                                elementType:  "Button", __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}

                    )



                                    )
                , React.createElement('div', { className: "flex flex-wrap" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}

                , React.createElement(ButtonList, { stationsList: this.state.lines[1],
                                buttonType: "Round",
                                buttonClicked: this.switchSelectedLine,
                                selected:  this.state.selectedSelectedLine,
                                elementType:  "Button", __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
                )


                 )
                , React.createElement('div', { className: "flex flex-wrap" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
                , React.createElement(ButtonList, { stationsList: this.state.lines[2],
                                buttonType: "Round",
                                buttonClicked: this.switchSelectedLine,
                                selected:  this.state.selectedLine,
                                elementType:  "Button", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
                )




                )
                , React.createElement('hr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}
                )
                , React.createElement('div', { className: "flex flex-wrap mt2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
                , React.createElement(ButtonList, { stationsList: ['Schedule','Alerts'],
                                buttonType: "Square",
                                buttonClicked: this.switchSelectedInfoType,
                                selected:  this.state.selectedInfoType,
                                elementType:  "Button", __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                )
                )
                , React.createElement('hr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 131}})
                , this.state.selectedInfoType === 'Schedule' && this.fields()
                , this.state.selectedInfoType === 'Alerts' && this.alerts()


                , React.createElement('hr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 136}})
                , this.allFieldsSet() && this.state.selectedInfoType === 'Schedule' &&
                React.createElement('h2', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}, "Schedule"

                )
                , this.allFieldsSet() && 
                  
                  this.schedule()
                
                






    , React.createElement('h2', { className: "mt2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "Maps")
    , React.createElement('h3', { onClick: ()=> window.open("https://cdn.mbta.com/sites/default/files/route_pdfs/2020-spring/rtRapid.pdf", "_blank"), className: " ml2 underline"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}, "Subway")
    , React.createElement('h3', { onClick: ()=> window.open("https://cdn.mbta.com/sites/default/files/route_pdfs/2020-spring/rtRapid.pdf", "_blank"), className: "ml2 underline" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, "Subway and Timetable"  )


             )

            
        )
            
    }

    alerts() {
      if(this.state.selectedLine === 'Red Line') {
        return (
          React.createElement(AlertTextContainer, { stations: this.state.alerts.redStations, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
            )
        )
      } else {
        return(
        React.createElement(AlertTextContainer, { stations: this.state.alerts.orangeLine, __self: this, __source: {fileName: _jsxFileName, lineNumber: 172}}
            )
        );
      }
    }

    switchSelectedLine(lineName) {
      console.log(lineName);
        this.setState({
            selectedLine: lineName,
            selectedStation: null
        });
      }

      switchSelectedInfoType(infoType) {
          console.log(infoType);
        this.setState({
            selectedInfoType: infoType,
            selectedDate: null
        });
      }


      fields() {
        let idClasses =
      "f7 ba b--gray3 b--gray2-d bg-gray0-d white-d db w-30 " +
      "focus-b--black focus-b--white-d"; 

      let contentBox = {
        boxSizing: 'border-box'
      }

      // let idErrElem = (<span />);
    // if (state.idError) {
    //   idErrElem = (
    //     <span className="f9 inter red2 db pt2">
    //       Collection must have a valid name.
    //     </span>
    //   );
    // }

    let redStations = ['Alefwife', 'Andrew', 'Ashmont',
    'Braintree', 'Broadway', 'Central','Charles/MGH', 'Davis', 'Downtown Crossing',
    'Fields Corner', 'Harvard', 'JFK/UMASS','Kendall/MIT', 'North Quincy', 'Park Street',
    'Porter', 'Quincy Adams', 'Quincy Center','Savin Hill', 'Shawmut', 'South Station']
    
    let orangeStations = ['Assembly', 'Back Bay', 'Chinatown', 'Community College', 'Downtown Crossing', 'Forest Hills',
    'Green Street', 'Haymarket', 'Jackson Square', 'Malden Center', 'Massachusets Avenue', 'North Station',
    'Oak Grove', 'Roxbury Crossing', 'Ruggles','State', 'Stony Brook', 'Sullivan Square', 'Tufts Medical Center', 'Wellington']

  

    let redOptions = redStations.map((station) => {
      return { value: station, label: station }
    })
        
    let orangeOptions = orangeStations.map((station) => {
      return { value: station, label: station }
    })

    let directionOptions = ['Northbound', 'Southbound'].map((station) => {
      return { value: station, label: station }
    });


        return (
          
          
              React.createElement('div', { className: "w-100 flex pr2 pt2 pb2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 240}}
                /* <p className="f8 mt3 lh-copy w-80 b">From:</p>
                <input
                  className={idClasses}
                  placeholder="Where are you now?"
                  type="text"
                  
                /> */


                , React.createElement(Select, { 
                placeholder: "Station Name" ,
                value: this.state.selectedStation,
                className: "w-30 mr2" ,
                options: this.state.selectedLine === 'Red Line' ? redOptions : orangeOptions ,
                onChange: this.handleStationChange,
                theme: (theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                  ...theme.colors,
                    text: 'white',
                    primary: 'black',
                  },
                }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 250}} )

                , React.createElement(Select, { 
                placeholder: "Direction",
                onChange: this.handleDirectionChange,
                className: "w-30 mr2" ,
                options: directionOptions,
                theme: (theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                  ...theme.colors,
                    text: 'white',
                    primary: 'black',
                  },
                }), __self: this, __source: {fileName: _jsxFileName, lineNumber: 266}} )
                 , React.createElement('input', { onChange: this.handleDateChange, type: "text", 

              style:  
                contentBox
              ,
              type: "date",
                      value: this.selectedDate, min: new Date(), max: "2020-06-20", defaultValue: new Date, className: idClasses, __self: this, __source: {fileName: _jsxFileName, lineNumber: 280}}
               )



               )
              
        );
      }

      handleDirectionChange(selectedOption) {
        this.setState({ selectedDirection: selectedOption })
      }

      handleDateChange(selectedOption) {
        this.setState({ selectedDate: selectedOption.target.value })

      }

      handleStationChange(selectedOption) {
        this.setState({ selectedStation: selectedOption })

      }

      allFieldsSet() {
        return this.state.selectedDate !== '' && this.state.selectedDirection !== '' && this.state.selectedStation !== ''  && this.state.selectedDate !== null && this.state.selectedStation !== null ;
      }

      schedule() {
        if(this.state.selectedLine === 'Red Line') {
          return (
          
                
            React.createElement('div', { class: "pa4 ml2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 319}}
            , React.createElement('div', { class: "overflow-auto", __self: this, __source: {fileName: _jsxFileName, lineNumber: 320}}
              , React.createElement('table', { class: "f6 w-100 mw8"  , cellspacing: "0", __self: this, __source: {fileName: _jsxFileName, lineNumber: 321}}
                , React.createElement('thead', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 322}}
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 323}}
                    , React.createElement('th', { class: "fw6 bb b--black-20 tl pb3 pr3 bg-white"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 324}}, "Scheduled")
                    , React.createElement('th', { class: "fw6 bb b--black-20 tl pb3 pr3 bg-white"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 325}}, "Northbound to" )

                  )
                )
                , React.createElement('tbody', { class: "lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 329}}
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 330}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 331}}, "01:50P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 332}}, "Alefwife")

                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 335}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 336}}, "02:03P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 337}}, "Alefwife")

                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 340}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 341}}, "02:17P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 342}}, "Alefwife")
                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 344}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 345}}, "02:30P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 346}}, "Alefwife")
                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 348}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 349}}, "02:44P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 350}}, "Alefwife")
                  )
                )
              )
            )
          )
                  );
        }
        else {
          return (
          
                
            React.createElement('div', { class: "pa4 ml2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 362}}
            , React.createElement('div', { class: "overflow-auto", __self: this, __source: {fileName: _jsxFileName, lineNumber: 363}}
              , React.createElement('table', { class: "f6 w-100 mw8"  , cellspacing: "0", __self: this, __source: {fileName: _jsxFileName, lineNumber: 364}}
                , React.createElement('thead', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 365}}
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 366}}
                    , React.createElement('th', { class: "fw6 bb b--black-20 tl pb3 pr3 bg-white"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 367}}, "Scheduled")
                    , React.createElement('th', { class: "fw6 bb b--black-20 tl pb3 pr3 bg-white"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 368}}, "Northbound to" )

                  )
                )
                , React.createElement('tbody', { class: "lh-copy", __self: this, __source: {fileName: _jsxFileName, lineNumber: 372}}
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 373}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 374}}, "011:50A")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 375}}, "Oak Grove" )

                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 378}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 379}}, "12:00P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 380}}, "Oak Grove" )

                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 383}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 384}}, "12:10P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 385}}, "Oak Grove" )
                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 387}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 388}}, "12:10P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 389}}, "Oak Grove" )
                  )
                  , React.createElement('tr', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 391}}
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 392}}, "12:20P")
                    , React.createElement('td', { class: "pv3 pr3 bb b--black-20"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 393}}, "Oak Grove" )
                  )
                )
              )
            )
          )
                  );
        }
        
      }


     

}