/**
 * Created by xukun on 2016/11/22.
 */
/**
 * Created by xukun on 2016/11/22.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  CustomCell

} from 'react-native-tableview-simple';
import NavigationBar from 'react-native-navbar';

var DEFAULT_URL = 'http://www.bkfj.net/bkeweekly/mobile.aspx'
export default class ThidPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title:this.props.title
        };
    }
    render(){


        var titleConfig = {
            title: 'E周刊',
            tintColor:'white',
            fontsize:'30'
        };
        var statusBar = {
            tintColor:'rgba(67, 148, 247, 1)',

        };
        return(
          <View style={{ flex: 1 }}
          >

              <NavigationBar
                title={titleConfig}
                statusBar={statusBar}
                style={styles.tabBarColor}
              />

              <WebView
                style={styles.container}
                source={{uri:DEFAULT_URL}}
                scalesPageToFit={true}
                startInLoadingState={true}
                domStorageEnabled={true}
                javaScriptEnabled={true}

              >

              </WebView>

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
    container: {
        flex: 1,
        marginTop:0
    },
    tabBarColor:{
        backgroundColor:'rgba(67, 148, 247, 1)',
    }
});