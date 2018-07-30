import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, DrawerNavigator} from 'react-navigation';
import Login from "./src/Login";
import Signup from "./src/Signup";
import Home from "./src/Dashboard";
import Apparel from "./src/DataA";
import Watches from "./src/DataB";
import Cellphone from "./src/DataC";
import Sports from "./src/DataD";
import Jewellery from "./src/DataE";


const Sidebar = DrawerNavigator({
  Home: {
    screen:Home

  },
  Apparel:{
    screen: Apparel
  },

  Watches:{
    screen: Watches
  },

  CellPhones:{
    screen: Cellphone
  },
  
  Sports:{
    screen: Sports
  }, 
  Jewellery:{
    screen: Jewellery
  }

})

const NavigationApp = StackNavigator({
  FirstLink:{
    screen: Login
  },
  Signup:{
    screen: Signup
  },
 Dashboard:{
    screen: Sidebar
  },
  // Home:{
  //   screen: Home
  // },
  Apparel:{
    screen: Apparel
  },
  Watches:{
    screen: Watches
  },
  CellPhones:{
    screen: Cellphone
  },
  Sports:{
    screen: Sports
  },
  Jewellery:{
    screen: Jewellery
  }
})

export default class App extends Component{
  render() {
    return (
      <NavigationApp/>
    );
  }
}


      

