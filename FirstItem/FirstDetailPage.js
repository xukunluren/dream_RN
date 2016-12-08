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
  Image,
  TouchableOpacity
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import DetailTopItem from './DetailTopItem';
import CardsItem from './CardsItem';
import MuseumDesc from './MuseumDesc'
import ExhibitPage from './ExhibitPage'
import TestPage from './../TestPage'
import TabNavigator from 'react-native-tab-navigator';

// import FirstPage from './FirstPage';
// import ThidPage from './../ThirdItem/ThidPage';
// import FourthPage from './../FourthItem/FourthPage';
// import ScanPage from './../ScanItem/ScanPage';
// import SecondPage from './../SecondItem/SecondPage';



export default class FirstDetailPage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rowName:null,
            rowData:null,
            url:null
        };
      };

    componentDidMount() {

        this.setState({
            rowName:this.props.rowName,
            rowData:this.props.rowData,
            url:'http://202.121.66.52:8010'+this.props.rowData.image.url,
        })
    };

    componentWillMount() {

    }
    popToFirstPage(){
    this.props.navigator.pop();
    };


    exhibitPress(){
        const{navigator} = this.props;
        navigator.push({
            name:'ExhibitPage',
            component:ExhibitPage,
            params:{
                title:this.props.name,
                id:this.props.rowData.id

            }
        })
    };
    onpress(){
        const{navigator} = this.props;
        navigator.push({
            name:'MuseumDesc',
            component:MuseumDesc,
            params:{
                title:this.props.name,
                imageUrl:this.props.rowData.info_image.url,
                dec:this.props.rowData.info
            }
        })
    };



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
            handler: this.popToFirstPage.bind(this),
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


              <View style={{flex:3}}>
                  <TouchableOpacity
                    style={{ flex:1}}
                    onPress={()=>this.onpress()}
                  >
                      <DetailTopItem  source={this.props.rowData.coverimage.url} time = {this.props.rowData.open_time} phone = {this.props.rowData.tel} price = {this.props.rowData.price}/>
                  </TouchableOpacity>
              </View>

              <View style={{flex:4,flexDirection:'row'}}>
                  {/*左边*/}
                  <View style={{flex:1,flexDirection:'column'}}>
                      {/*左上*/}
                      <View style={{flex:5}}>
                          <TouchableOpacity
                            style={{ flex:1}}
                            onPress={()=>this.exhibitPress()}
                          >
                        <CardsItem style={{flex:1}}  text  = "展品导航" source={require('./../images/btn_zpdl.png')}/>
                      </TouchableOpacity>
                      </View>
                      {/*左下*/}
                      <View style={{flex:3}}>
                          <CardsItem style={{flex:1}} text = "交通信息" source={require('./../images/btn_jtxx.png')}/>
                      </View>

                  </View>
                  {/*右边*/}
                  <View style={{flex:1}}>
                      {/*右上*/}
                      <View style={{flex:3}}>

                          <CardsItem style={{flex:1}}  text = "场馆动态" source={require('./../images/btn_zxhd.png')}/>
                      </View>
                      {/*右下*/}
                      <View style={{flex:5}}>
                          <CardsItem style={{flex:1}}  text = "展品图集" source={require('./../images/btn_zptj.png')}/>
                      </View>

                  </View>
              </View>
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