/**
 * Created by xukun on 2016/11/23.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';
import FirstPage from './FirstPage'
import TestPage from '../TestPage'
import FirstDetailPage from './FirstDetailPage'

export default class First extends Component{
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.HorizontalSwipeJump; // 右侧弹出
    }
    render(){
        let defaultName = 'FirstPage';
        let defaultComponent = FirstPage;
        return(
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