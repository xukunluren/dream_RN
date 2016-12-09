'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VibrationIOS,
  Dimensions,
  AlertIOS,
} from 'react-native';

import Camera from 'react-native-camera';
import HomePage from './HomePage'
import TestPage from './TestPage'

var turnPage = true;
var QRCodeScreen = React.createClass({

  propTypes: {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      cancelButtonVisible: true,
      cancelButtonTitle: 'Cancel',
    };
  },
  _onPressCancel: function() {
      const{navigator} = this.props;

      navigator.push({
          name:'HomePage',
          component:HomePage,

      })
  },
    componentDidMount() {
       AlertIOS.alert("didMount");

    },
    componentWillUnMount() {
        AlertIOS.alert("WillUnMount");
    },
    componentWillMount() {
        AlertIOS.alert("WillMount");
    },
    componentDidUpdate() {
        turnPage = true;
    },

  _onBarCodeRead: function(result) {
    var $this = this;
    if (this.barCodeFlag) {
      this.barCodeFlag = false;

      setTimeout(function() {
          if(turnPage){
              VibrationIOS.vibrate();
             turnPage = false;
              const{navigator} = $this.props;
              navigator.push({
                  name:'TestPage',
                  component:TestPage,

              })
          }
          turnPage = false;
      }, 1000);

    }
  },

  render: function() {
    var cancelButton = null;
    this.barCodeFlag = true;

    if (this.props.cancelButtonVisible) {
      cancelButton = <CancelButton onPress={this._onPressCancel}  />;
    }

    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        {cancelButton}
      </Camera>
    );
  },
});

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>取消</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  camera: {
    height: Dimensions.get('window').height-50,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});

module.exports = QRCodeScreen;
