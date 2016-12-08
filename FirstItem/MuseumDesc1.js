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
  ListView,
  Image,
} from 'react-native';
import TabBar from 'react-native-xtabbar'


export default class MuseumDesc1 extends Component{



    render(){
        return(

          <Image style={{flex:1}} source={{uri:'http://202.121.66.52:8010/uploads/museum/image/1/W020140401111510112476.jpg'}}>
              <Text>
                  nihaos
              </Text>
          </Image>

        );
    }
}
