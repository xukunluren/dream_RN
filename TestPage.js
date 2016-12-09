/**
 * Created by xukun on 2016/11/24.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  InteractionManager,
  Navigator,
  ListView,
  Image,
} from 'react-native';
import FirstDetailPage from './FirstItem/FirstDetailPage'
import MuseumDesc from './FirstItem/MuseumDesc'
import NavigationBar from 'react-native-navbar';


export default class TestPage extends Component{

    render(){
        var titleConfig = {
            title:this.props.name,
            tintColor:'white',
            fontSize:16
        };
        var statusBar = {
            tintColor:'rgba(67, 148, 247, 1)',

        };

        var leftButton ={
            title:'< 梦之园',
            handler: ()=>{  this.props.navigator.pop();},
            tintColor:'white',
            fontSize:12
        };
        return(
          <View style={{ flex: 1 }}>
          <NavigationBar
            title={titleConfig}
            statusBar={statusBar}
            style={styles.tabBarColor}
            leftButton = {leftButton}
          />
              <View><Text>nihao</Text></View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    stage: {
        backgroundColor: '#EFEFF4',
        paddingBottom: 20,
        flex: 1
    },
    tabBarColor:{
        backgroundColor:'rgba(67, 148, 247, 1)',
    },
});