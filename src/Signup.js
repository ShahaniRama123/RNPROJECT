import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Signup extends Component {
    static navigationOptions ={
        title: 'Signup'
    }
  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <Text> Signup </Text>
        <Button
            onPress={()=>navigation.navigate('FirstLink')}
            title="Login"
        />
      </View>
    )
  }
}