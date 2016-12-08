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
  Dimensions,
  ListView,
} from 'react-native';
import TabBar from 'react-native-xtabbar'
import MuseumDesc1 from './MuseumDesc1'
import NavigationBar from 'react-native-navbar';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default class MuseumDesc extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            uri:'http://202.121.66.52:8010/uploads/museum/image/8/1303978825.jpg',
        };
      }

    componentDidMount() {
        this.setState({
            uri:'http://202.121.66.52:8010'+this.props.imageUrl,
        });
    };
    popToFirstPage(){
        this.props.navigator.pop();
    };

    render(){
        var titleConfig = {
            title:'场馆简介',
            tintColor:'white',
            fontSize:16
        };
        var statusBar = {
            tintColor:'rgba(67, 148, 247, 1)',

        };

        var leftButton ={
            title:"<"+this.props.title,
            handler: this.popToFirstPage.bind(this),
            tintColor:'white',
            fontSize:8,
        };
        return(
    <View style={{flex:1}}>
        <NavigationBar
          title={titleConfig}
          statusBar={statusBar}
          style={styles.tabBarColor}
          leftButton = {leftButton}
        />
          <Image
                  indicator={ProgressBar.Pie}
                  style={{flex:1, resizeMode:'cover'}}
                  source={{uri:this.state.uri}}>
              <View style={{flex:9}}></View>
             <View style={{ flex:3,backgroundColor:'black', opacity:0.7,marginBottom:100,}}  >
              <Text style={{color:'white',fontSize:14,margin:10}}>
                  {this.props.title}
              </Text>
              <Text style={{color:'white',fontSize:12,marginLeft:10}} >
                  {this.props.dec}
              </Text>
             </View>
              <View style={{flex:1}}></View>
          </Image>
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