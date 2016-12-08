/**
 * Created by xukun on 2016/11/23.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,

  View
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';





export default class FirstPageCell extends Component{
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
        var imageURL = this.state.url+this.props.museumData.coverimage.url;
        return(

          <View style={styles.contain}>
              <View style={styles.topView}>
                  <Image
                    source={{ uri:imageURL }}
                    indicator={ProgressBar.Pie}
                    style={styles.imageView}
                  />
                  {/*<Image*/}
                {/*style={styles.imageView}*/}
                {/*source={require('../images/back.png')}></Image>*/}
              </View>

              <View style={styles.bottomView}>
                  <View style={{paddingLeft:2,flex:6}}>
                    <Text style={styles.titleText}>{this.props.museumData.name}</Text>
                     <Text style={styles.addressText}>{this.props.museumData.address}</Text>
                  </View>
                  <View style={{paddingRight:10,flex:2,justifyContent:'center',alignItems:'flex-end'}}>

                          {this.props.museumData.feature.length>0?(
                            <View style={{height:20,width:65,backgroundColor:'green',borderRadius:5,justifyContent:'center'}}>
                            <Text style={{alignItems:'center',justifyContent:'center',color:'white',margin:2,fontSize:12,paddingLeft:2 }}>{this.props.museumData.feature}</Text>
                            </View>)

                            :(null)}


                  </View>

              </View>
              <View style={styles.spaceView}></View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
     contain:{
         flex:1,
         padding:0
     },
    topView:{
         flex:10,


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
        flexDirection:'column',
        fontSize:16,
        color:'black',
        justifyContent:'center',
        paddingTop:10,
        paddingLeft:5
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
    imageView:{
        flex:1,
        height:200
    }

});