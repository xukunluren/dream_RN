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
  ScrollView
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  CustomCell

} from 'react-native-tableview-simple';
import NavigationBar from 'react-native-navbar';


export default class FourthPage extends Component{
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
            title: '我的',
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
    }
});