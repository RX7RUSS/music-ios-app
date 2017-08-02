import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
    render(props) {
      return (
        <Text style={styles.largetext}>{this.props.headerText}</Text>
    );
  };

}

const styles = StyleSheet.create({
  largetext: {
    fontSize: 20,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 25,
    paddingBottom:25,
    backgroundColor: '#E8E8E8',
  },
});

export default Header;
