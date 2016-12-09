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
  ListView,
  TouchableOpacity
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  CustomCell

} from 'react-native-tableview-simple';
import NavigationBar from 'react-native-navbar';
import SecondPageCell from './SecondPageCell'


export default class SecondPage extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            title:this.props.title,
            loaded:false
        };
    }

    componentDidMount() {
        fetch('http://202.121.66.52:8010/event',{
            method:'GET',
        }).then((response) => response.json())
          .then((responseData)=>{
              // jsonDataArr = responseData

              this.setState({
                  // jsonData:responseData,
                  dataSource:this.state.dataSource.cloneWithRows(responseData),
                  loaded:true
              })
          })
          .catch(err=>{
              ()=>alert("数据请求出错");
          })
    }
    _onPressButton(rowName,rowData){

        const{navigator} = this.props;

        // navigator.push({
        //     name:'FirstDetailPage',
        //     component:FirstDetailPage,
        //     params:{
        //         rowData:rowData,
        //         name:rowName,
        //     }
        // })
    };
    _renderRow(rowData, sectionID, rowID){
        return(
          <TouchableOpacity onPress={()=>this._onPressButton(rowData.name,rowData)}>
              <SecondPageCell itemData = {rowData}/>
          </TouchableOpacity>
        )
    }
    render(){


        var titleConfig = {
            title: '乐活动',
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
    }
});