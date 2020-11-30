import React from 'react';
import { Button, ThemeProvider, Input } from 'react-native-elements';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { LogoInalumMindid } from '../../assets/icon';

const Login = ({navigation}) => {

  const [txtUser, setUser] = React.useState();
  const [txtPass, setPass] = React.useState();

  const checkLogin = () => {
    // console.log(txtUser);
    if(txtUser === 'rizki' && txtPass === 'rahasia'){
      navigation.replace("Home")
    } else {
      console.log('Password Salah');
    }
  }

  return(
    <ThemeProvider>

    <SafeAreaView style={styles.container}>
      <Image source={LogoInalumMindid} style={styles.logo} />
      <Input
        placeholder='Username'
        onChangeText={text => setUser(text)}
        // value={value}
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='grey'
          />
        }
      />

    <Input
        placeholder='Password'
        onChangeText={text => setPass(text)}
        secureTextEntry={true}
        rightIcon={
          <Icon
            name='lock'
            size={24}
            color='grey'
            
          />
        }
      />
      
        <Button 
          title="Login" 
          buttonStyle={styles.loginButton}
          containerStyle={styles.loginButtonContainer}
          onPress={() => checkLogin()}
        />
      
      
    </SafeAreaView>

      
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },

  logo: {
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: "center",
  },

  loginButton: {
    width : '100%',
    justifyContent: 'center'
  },

  
  loginButtonContainer: {
    width : '50%',
    alignSelf: 'center'
  }

})

export default Login;