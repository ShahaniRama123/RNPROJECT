import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native';

export default class Login extends Component {
    static navigationOptions ={
        title: 'Login'
    }
    constructor(props){
      super(props);
      this.state={
        username:'',
        password:''
      }
      this.sendData = this.sendData.bind(this);
      }

      async sendData(){
        console.log(this.state);
        await fetch("http://192.168.1.6/4000/login", {
            method: 'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body: JSON.stringify({
              username:this.state.username,
              password:this.state.password
            })
           });
           let res = await response.text();
           if(response.status > 200 && response.status < 300){
             console.log(res);
           }else{
             let error = res;
             console.log(error);
             
           }

      }catch(error){
        console.log(error);
      }



  render() {
      const navigation = this.props.navigation;
    return (
      <View>
          <Text>
              Login
          </Text>

          <View>
            <TextInput 
            placeholder="Enter username"
            onChangeText={(e)=>this.setState({username:e})}
            />
            <TextInput 
            placeholder="Enter Password"
            onChangeText={(e)=>this.setState({password:e})}
            />
            <Button 
            title="send data"
            onPress={this.sendData} />
            </View>
          <Button
            onPress={()=>navigation.navigate('Signup')}
            title="Signup"
          />
          
           <Button
            onPress={()=>navigation.navigate('Dashboard')}
            title="Dashboard"
          />
      </View>
    )
  }
}




















