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
  Navigator,
  InteractionManager,
  Dimensions,
  ListView,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import FirstPageCell from './FirstPageCell'
import FirstDetailPage from './FirstDetailPage'
import TabNavigator from 'react-native-tab-navigator';

var jsonDataArr=[];
var cellArr = [];

export default class FirstPage extends Component{

    dataNoPrepare = true;
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {
              dataSource: new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2,
              }),
              loaded: false,
              jsonData:null,
              cellArr:null,
              dataNoPrepare:true,
              title:"磨耗",
              id:null
          };
      };

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


    componentWillMount() {
        console.log("willMount");
    };

    componentDidUnMount() {
        console.log("DidUnMount");
    };

    componentWillUnMount() {
        console.log("WillUnMount");
    };

    componentDidUpdate() {

        console.log("DIdUpDate");
    };

_onPressButton(rowName,rowData){

        const{navigator} = this.props;

       navigator.push({
            name:'FirstDetailPage',
            component:FirstDetailPage,
             params:{
                 rowData:rowData,
                 name:rowName,
            }
        })
    };
    renderLoadingView() {
        return (
          <View style={styles.container}>
              <Text>
                  Loading movies...
              </Text>
          </View>
        );
    };
    _renderRow(rowData, sectionID, rowID){
        return(
            <TouchableOpacity onPress={()=>this._onPressButton(rowData.name,rowData)}>
              <FirstPageCell museumData = {rowData}/>
            </TouchableOpacity>
        )
    }

    render(){


        if (!this.state.jsonData){
            return this.renderLoadingView();
        }else{

        return (
          <View style={styles.container }>

              <NavigationBar
                title={{
                    title: '梦之园',
                    tintColor:'white',
                    fontsize:'30'
                }}
                statusBar={{tintColor:'rgba(67, 148, 247, 1)'}}
                style={styles.tabBarColor}
                rightButton={{
                    title:'next',
                    handler: function onNext() {
                        alert('hello!');
                    }}}
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
}


class CellClass extends Component{


    render(){
        var index = 0;

       var navigator = this.props.navigator;
        return(
          <CustomCell contentContainerStyle={{height:259,paddingTop:0,paddingLeft:0,paddingRight:0,paddingBottom:0}}
                      onPress={this.props.onPress}>
              <FirstPageCell museumData = {this.props.museumData}/>
          </CustomCell>
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
    topView:{
        flex:4,
        backgroundColor:'red'

    },
    bottomView:{
        flex:1,
        backgroundColor:'blue'

    },
    contain:{
        flex:1,
        padding:0
    },
});