/**
 * Created by xukun on 2016/12/8.
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

export default class ItemListView extends Component {
render(){
    return(
          <View>
                <View style={{flexDirection:'row', height:70}}
                >
                  <View style={{flex:1,padding:2}}>
                      {/*//左边image*/}
                   <Image source={{uri:'http://202.121.66.52:8010/uploads/plant/image/4/logo_003-3.jpg'}}
                          indicator={ProgressBar.Pie}
                          style={styles.imageView}
                   />
                  </View>
                  <View style={{flex:3, flexDirection:'column'}}>
                      {/*//右边文字*/}
                      <View style={styles.titleView}>
                          {/*//右上标题文字*/}
                          <Text style={{ fontSize:14,}}>标题文字在这里显示</Text>
                      </View>

                      <View style={styles.decView}>
                          {/*//右下解释文字*/}
                          <Text style={{color:'gray',fontSize:12}}>具体解释文字在这里显示</Text>
                      </View>
                  </View>
                </View>
              <View style={styles.fengeView}></View>
           </View>
    );
}
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        padding:0
    },
    imageView:{
        flex:1,
        borderRadius:5,
        paddingBottom:2

    },
    titleView:{
        flex:1,
        marginLeft:2,
        justifyContent:'center',
        paddingTop:2

    },
    decView:{
        flex:1,
        marginLeft:2,

    },
    fengeView:{
        height: 0.5,
        backgroundColor:'gray',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        marginBottom:5

    }

});