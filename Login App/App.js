import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert } from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      name: '',
      email: '',
      password: '',
    }
  }

  onClickListener = (view) => {
    /*
      Handle the click events for login, rest password, and sign up actions. 
      How the e-mail and password is passed (ex: http request) is entirely up to the client.
    */
    Alert.alert("Alert", "Update "+view+" functionality");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputs}
            onChangeText={(text) => this.setState({name: text})}
            placeholder="Enter Name"
            underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputs}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              placeholder="Enter Email"
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputs}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              placeholder="Enter Password"
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonWrapper, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonWrapper} onPress={() => this.onClickListener('reset_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonWrapper} onPress={() => this.onClickListener('sign-up')}>
            <Text>Not registered? Sign up today</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputWrapper: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#DCDCDC',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonWrapper: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#000",
  },
  loginText: {
    color: '#FFF',
  }
});
