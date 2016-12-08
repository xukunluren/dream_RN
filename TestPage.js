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


export default class TestPage extends Component{
    // 构造
      constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              dataSource: new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2,
              }),
              loaded: false,
          };
      }
    componentDidMount() {
        fetch('http://202.121.66.52:8010/museums',{
            method:'GET',
        }).then((response) => response.json())
          .then((responseData)=>{
              jsonDataArr = responseData

              this.setState({
                  jsonData:responseData,
                  dataSource:this.state.dataSource.cloneWithRows(responseData),
                  loaded:true

              })
          })
          .catch(err=>{
              ()=>alert("数据请求出错");
          })
    }
    render(){
        let defaultName = 'MuseumDesc';
        let defaultComponent = MuseumDesc;
        return(
          <Navigator
            style={{flex:1}}
            initialRoute={{name:defaultName,component:defaultComponent}}
            configureScene = {this.configureScene}
            renderScene={(route, navigator) => {
                let Component = route.component;
                if(route.component) {
                    return <Component {...route.params} navigator={navigator} />
                }
            }} >
              ></Navigator>
        );
    }
}
