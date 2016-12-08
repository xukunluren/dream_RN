/**
 * Created by xukun on 2016/12/1.
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
export default class DetailTopItem extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url:'http://202.121.66.52:8010',
            uri:'http://202.121.66.52:8010/uploads/museum/image/8/1303978825.jpg'
        };
      }

    componentDidMount() {
        this.setState({
         uri:'http://202.121.66.52:8010'+this.props.source,
    })
    };
    _onPress(){
        console.log("Nihao");
    }
    render(){
        return(
          <View style={{flex:1}}>
              <Image style={styles.imageView} source={{uri:this.state.uri}}>
                 <View style={{flex:2,flexDirection:'column'}}>
                  <Text style={styles.phoneText}>{this.props.phone}</Text>
                     <Text style={styles.timeText}>{this.props.time}</Text>
                </View>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}}>
                      <Text style={styles.priceText}>票价:{this.props.price}</Text>
                  </View>
              </Image>
          </View>

        );
    }
}


const styles = StyleSheet.create({
    containView: {
        backgroundColor: '#EFEFF4',
        paddingBottom: 20,
        flex: 1,

    },
    imageView:{
        flex:1,
        borderRadius:5,
        margin:2,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flexDirection:'row'

    },
    phoneText:{
        color:'white',
        fontSize:12,
        backgroundColor:'transparent',
        paddingBottom:3,
        paddingLeft:5
    },
    timeText:{
        color:'white',
        fontSize:12,
        backgroundColor:'transparent',
        paddingBottom:5,
        paddingLeft:5
    },
    priceText:{

        color:'white',
        fontSize:16,
        backgroundColor:'transparent',
        paddingBottom:10,
        paddingRight:10
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