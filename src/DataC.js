import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';

export default class extends Component {

  constructor(props) {
    super(props); //Import all methods from Component Class

    //States
    this.state = {title: 'Todo App', title2: 'Cellphone', item: '', items: []}

    this.handleLogin = this.handleLogin.bind(this); //Bind this method to the main class tree of React
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    if(this.state.item !== '') {
      let item = this.state.item;
  
      this.state.items.push({
        "item": item
      });
  
      this.setState({item: ''})
    } else {
      ToastAndroid.show('Item text field cannot be empty', ToastAndroid.SHORT);
    }
  }

  handleChange() {

  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>
          {this.state.title}
        </Text>
        <Text style={Styles.title2}>
          {this.state.title2}
        </Text>
        <TextInput 
          placeholder="Write Todo Item"
          style={Styles.textInput}
          onChangeText={(text) => {this.state.item = text} }
        />
    
        <TouchableOpacity
          onPress={this.handleLogin}
          style={Styles.button}
        >
          <Text style={Styles.btnText}> Add </Text>
        </TouchableOpacity>
        <View>
          {this.state.items.map((item,index) => {
            return (
              <View key={"view" + index}>
                <Text key={"text" + index}>{item.item}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
    height: '100%'
  },
  title: {
    fontSize: 30,
    color: '#222222'
  },
  title2: {
    fontSize: 20,
    color: '#222222'
  },
  text: {
    fontSize: 20
  },
  textInput: {
    width: '100%'
  },
  btnText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#e3e3e3',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})




// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class DataC extends Component {
//   render() {
//     return (
//       <View>
//         <Text> My ToDo App </Text>
//         <Text> Cellphones </Text>
//       </View>
//     )
//   }
// }