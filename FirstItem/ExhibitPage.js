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
import ItemListView from './ItemListView'
export default class ExhibitPage extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            uri:'http://202.121.66.52:8010/items',

        };
      }


    componentDidMount() {

        fetch('http://202.121.66.52:8010/items/museum/'+this.props.id,{
                method:'GET',
        }).then((response) => response.json())
          .then((responseData)=>{
              jsonDataArr = responseData
              this.setState({
                  jsonData:responseData,
                  dataSource:this.state.dataSource.cloneWithRows(responseData),
                  loaded:true
              })
              }).catch(err=>{
            ()=>alert("数据请求出错");
        })
        };

    popToFirstPage(){
        this.props.navigator.pop();
    };
    _renderRow(rowData, sectionID, rowID){
        return(
          <TouchableOpacity onPress={()=>this._onPressButton(rowData.name,rowData)}>
              <ItemListView itemsData = {rowData} source={{uri:'http://202.121.66.52:8010'+rowData.image.logo.url,}} style={{flex:1}}/>
          </TouchableOpacity>
        )
    }
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
                  statusBar={statusBar}
                  style={styles.tabBarColor}
                  leftButton = {leftButton}
                />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={{backgroundColor: '#F5FCFF',}}
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
    },

});