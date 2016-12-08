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
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            uri:'http://202.121.66.52:8010/uploads/item/image/46/logo_photo1_02_011.jpg',
        };
      }

    componentDidMount() {
        this.setState({
            uri:'http://202.121.66.52:8010'+this.props.itemsData.image.logo.url,
        })

    }
render(){
    console.log(this.state.uri);
    return(
          <View>
                <View style={{flexDirection:'row', height:70}}
                >

                    <View style={{flex:1,padding:2}}>
                        {/*//左边image*/}
                        <Image source={this.props.source}
                               indicator={ProgressBar.Bar}
                               style={styles.imageView}

                        />
                    </View>

                  <View style={{flex:3, flexDirection:'column'}}>
                      {/*//右边文字*/}
                      <View style={styles.titleView}>
                          {/*//右上标题文字*/}
                          <Text style={{ fontSize:14,}}>{this.props.itemsData.name}</Text>
                      </View>

                      <View style={styles.decView}>
                          {/*//右下解释文字*/}
                          <Text style={{color:'gray',fontSize:12}}>{this.props.itemsData.description}</Text>
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
        flex:2,
        marginLeft:2,
        justifyContent:'center',
        paddingTop:2

    },
    decView:{
        flex:3,
        marginLeft:2,
        height:35

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