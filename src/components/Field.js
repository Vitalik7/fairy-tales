import React, { Component } from 'react';
import SvgIconBook from '../SvgIcons/SvgIconBook'
import Icons from '../components/Icons'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200, yellow500} from 'material-ui/styles/colors';

import '../styles/style.css'

export default class Field extends Component {



  render() {
    const starStyles = {
      fontSize: 34,
      marginRight: 10
    }

    const searchStyles = {
      marginRight: 15,
      marginTop: 10,
    }

    const appbar = {
      marginTop: -30
    }


    return (
      <div className='App' >
        <header className="App-header">
          <AppBar

            title="Всі казки"
            iconElementRight={<FontIcon style={searchStyles}>&#128269;</FontIcon>}
          />
        </header>

        <div className='tale'>
          <AppBar
             className="appbas"
             title="Біда Навчить"
             iconElementLeft={<SvgIconBook  />}
             iconElementRight={<FontIcon className="material-icon-star" style={starStyles} hoverColor="red" color={yellow500}>&#x2729;</FontIcon>}
           />

           <AppBar
              title="Бурячок і їжачок"
              iconElementLeft={<SvgIconBook  />}
              iconElementRight={<FontIcon className="material-icon-star" style={starStyles} hoverColor="red" color={yellow500}>&#x2729;</FontIcon>}
            />


        </div>

      </div>
    );
  }
}
