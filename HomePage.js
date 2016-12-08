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
  Image
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
  CustomCell

} from 'react-native-tableview-simple'

import FirstPage from '../studentStudyReact/FirstItem/FirstPage';
import First from '../studentStudyReact/FirstItem/First'
import SecondPage from '../studentStudyReact/SecondItem/SecondPage';
import ThidPage from '../studentStudyReact/ThirdItem/ThidPage';
import FourthPage from '../studentStudyReact/FourthItem/FourthPage';
import ScanPage from '../studentStudyReact/ScanItem/ScanPage';
import TabBar from 'react-native-xtabbar'
import TabNavigator from 'react-native-tab-navigator';


const tabBarItems = [
    { title: '梦之园', icon: () => <Image style={{ width: 22, height: 22 }} source={require('./../studentStudyReact/images/home.png')}/>, component: FirstPage },
    { title: '乐活动', icon: () => <Image style={{ width: 22, height: 22 }} source={require('./../studentStudyReact/images/eweekly.png')}/>, component: SecondPage },
    { title: '扫一扫', icon: () => <Image style={{ width: 22, height: 22 }} source={require('./../studentStudyReact/images/code.png')}/>, component: ScanPage },
    { title: 'E周刊', icon: () => <Image style={{ width: 22, height: 22 }} source={require('./../studentStudyReact/images/shopping.png')}/>, component: ThidPage },
    { title: '我的', icon: () => <Image style={{ width: 22, height: 22 }} source={require('./../studentStudyReact/images/mysetting.png')}/>, component: FourthPage },

]
export default class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render(){
        return(

        <TabNavigator tabBarStyle={{ height: 50,backgroundColor:'rgba(67, 148, 247, 1)'  }}
        >
            {
                tabBarItems.map((controller, i) => {
                    let Component = controller.component;
                    return (
                      <TabNavigator.Item
                        key= {i}
                        tabStyle={{justifyContent:'center'}}
                        titleStyle={{color:'white'}}
                        selected={this.state.selectedTab === controller.title}
                        title={controller.title}
                        renderIcon={controller.icon}
                        onPress={() => this.setState({ selectedTab: controller.title })}
                        selectedTitleStyle ={{color:'black'}}

                      >
                          <Component navigator = {this.props.navigator} {...this.props}/>
                      </TabNavigator.Item>
                    )
                })
            }
        </TabNavigator >

          // <TabBar
          //   style={[styles.content,styles.navTextColor,styles.navTextColorSelected]}
          //   onItemSelected={(index) => {console.log(`current item's index is ${index}`);}}
          // >
          //     <TabBar.Item
          //       icon={require('./../studentStudyReact/images/home.png')}
          //       selectedIcon={require('./../studentStudyReact/images/home.png')}
          //       title='梦之园'>
          //         <First/>
          //     </TabBar.Item>
          //
          //     <TabBar.Item
          //       icon={require('./../studentStudyReact/images/eweekly.png')}
          //       selectedIcon={require('./../studentStudyReact/images/eweekly.png')}
          //       title='乐活动'>
          //
          //
          //         <SecondPage navigator = {this.props.navigator}/>
          //     </TabBar.Item>
          //
          //     <TabBar.Item
          //       icon={require('./../studentStudyReact/images/code.png')}
          //       selectedIcon={require('./../studentStudyReact/images/code.png')}
          //       title ='扫一扫'
          //       >
          //         <ScanPage/>
          //     </TabBar.Item>
          //
          //     <TabBar.Item
          //       icon={require('./../studentStudyReact/images/shopping.png')}
          //       selectedIcon={require('./../studentStudyReact/images/shopping.png')}
          //       title='E周刊'>
          //         <ThidPage/>
          //     </TabBar.Item>
          //
          //     <TabBar.Item
          //       icon={require('./../studentStudyReact/images/mysetting.png')}
          //       selectedIcon={require('./../studentStudyReact/images/mysetting.png')}
          //       title='我的'>
          //         <FourthPage/>
          //     </TabBar.Item>
          // </TabBar>
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