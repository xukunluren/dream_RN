/**
 * Created by xukun on 2016/11/23.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';





export default class SecondPageCell extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url:"http://202.121.66.52:8010",
            imageUrl:''
        };
      }

    componentWillMount() {
        this.setState({
            imageUrl:'http://202.121.66.52:8010${this.props.museumData.coverimage.url}',
        });


    }
    render(){
        // var imageURL = this.state.url+this.props.museumData.coverimage.url;
        return(
          <View style={styles.contain}>
              <View style={{alignItems:'center'}}>
                  <View style={styles.dateTextView}>
                      <Text style={styles.dateText}>2016-08-16</Text>
                  </View>
              </View>
              <View style={styles.topView}>
                  <View style={{alignItems:'center'}}>
                  <Image
                    source={{ uri:'http://202.121.66.52:8010/uploads/plant/image/4/003-3.jpg'}}
                    indicator={ProgressBar.Pie}
                    style={styles.imageView}
                  >
                      <View style={{justifyContent:'center',backgroundColor:'black',
                          opacity:0.7,height:50}}>
                      <Text style={styles.imageText}>荷花展</Text>
                      </View>
                    </Image>
                      </View>
                  <View style={{flex:1}}>
                      <Text style={styles.titleText}>        行高高 测试行高行高行高高 测试行高高 测试行高行高高 测试行高高 测试行高行高高 测试行高高 测试行高 </Text>
                      <Text style={styles.decText}>--顾村公园</Text>
                  </View>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
     contain:{
         flex:1,
         padding:0,
         height:300,
         backgroundColor:'#E0E0E0'

     },
    dateTextView:{
         justifyContent:'center',
         alignItems:'center',
         height:17,
         width:85,
        backgroundColor:'#6d6d6d',
        borderRadius:5,
        margin:5,
        fontSize:10
    },
    dateText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    topView:{
         height:Dimensions.get('window').height*0.41,
         backgroundColor:'white',
         borderRadius:5,
        // justifyContent:'center',
        // alignItems:'center',
        margin:3
    },
    imageView:{

        height:Dimensions.get('window').height*0.31,
        width:Dimensions.get('window').width-20 ,
        margin:5,
        // padding:5,
        justifyContent:'flex-end'
    },
    imageText:{
        color:'white',
        fontSize:14,
        margin:5
    },
    bottomView:{
        flex:3,
        justifyContent:'center',
        flexDirection:'row'
        // alignItems:'center'

    },
    spaceView:{
        flex:1,
        backgroundColor:'white'
    },
    titleText:{
        flex:2,
        fontSize:14,
        color:'black',
        paddingLeft:8,
        paddingRight:5,
        textAlign:'left'
    },
    decText:{
        flex:1,
        fontSize:14,
        color:'black',
        paddingLeft:5,
        textAlign:'right'
    },
    addressText:{
        flex:1,
        flexDirection:'column',
        fontSize:14,
        paddingLeft:5,
        color:'gray',
        paddingTop:6,
        paddingBottom:10

    },


});