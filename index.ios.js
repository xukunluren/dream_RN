/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  CustomCell

} from 'react-native-tableview-simple'
import  HomePage from './HomePage'
// import First from './FirstItem/First'

import TestPage from './TestPage';

export default class studentStudyReact extends Component {

  render() {
    let defaultName = 'HomePage';
    let defaultComponent = HomePage;
    return (

      <Navigator
        style={{flex:1}}
        initialRoute={{name:defaultName,component:defaultComponent}}
        configureScene = {this.configureScene}
        renderScene={(route, navigator) => {
          {/*switch (route.name){*/}
          {/*case "TestPage":*/}
          {/*return <TestPage navigator = {navigator}/>;*/}
          {/*case "FirstDetailPage":*/}
          {/*return <FirstDetailPage navigator = {navigator}/>*/}
          {/*}*/}
          let Component = route.component;
          if(route.component) {
            return <Component {...route.params} navigator={navigator} tabNav = {this.props.tab} />
          }
        }} >
        ></Navigator>
    );
  }
}

AppRegistry.registerComponent('studentStudyReact', () => studentStudyReact);
