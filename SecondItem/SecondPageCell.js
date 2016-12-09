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
                      <Text style={styles.dateText}>{this.props.itemData.content}</Text>
                  </View>
              </View>
              <View style={styles.topView}>
                  <View style={{alignItems:'center'}}>
                  <Image
                    source={{ uri:this.props.itemData.cover}}
                    indicator={ProgressBar.Pie}
                    style={styles.imageView}
                  >
                      <View style={{justifyContent:'center',backgroundColor:'black',
                          opacity:0.7,height:50}}>
                      <Text style={styles.imageText}>{this.props.itemData.name}</Text>
                      </View>
                    </Image>
                      </View>
                  <View style={{flex:1}}>
                      <Text style={styles.titleText}> {this.props.itemData.description}</Text>
                      <Text style={styles.decText}>--{this.props.itemData.museum.name}</Text>
                  </View>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
     contain:{
         flex:1,
         paddingTop:10,
         height:300,
         backgroundColor:'#E0E0E0'

     },
    dateTextView:{
         justifyContent:'center',
         alignItems:'center',
         height:17,
         width:95,
        backgroundColor:'gray',
        borderRadius:5,
        margin:5,

    },
    dateText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    topView:{
         height:Dimensions.get('window').height*0.42,
         backgroundColor:'white',
         borderRadius:5,
        // justifyContent:'center',
        // alignItems:'center',
        margin:3
    },
    imageView:{

        height:Dimensions.get('window').height*0.28,
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
        flex:1,
        fontSize:12,
        color:'black',
        paddingLeft:8,
        paddingRight:5,
        textAlign:'left'
    },
    decText:{
        flex:1,
        fontSize:12,
        color:'black',
        paddingLeft:5,
        textAlign:'right',
        margin:3

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