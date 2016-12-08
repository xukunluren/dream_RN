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
  Dimensions
} from 'react-native';
export default class CardsItem extends Component{
    render(){
        return(
        <View style={styles.contain}>

                <Image style={styles.imageView} source={this.props.source}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </Image>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        borderRadius:5,
        margin:2
    },
    textView:{
        flex:1,
    },
    text:{
        backgroundColor:'transparent',
        color:'white',
        fontSize:12,
        height:25,
        fontSize:12,
        paddingTop:5,
        paddingLeft:10,
        justifyContent:'flex-start'

    },
    imageView:{
        flex:1,
        borderRadius:5,
        resizeMode:'cover',
        width:Dimensions.get('window').width*0.5-4,

    },

});