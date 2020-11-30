import React from 'react';
import { Button, ThemeProvider, Input } from 'react-native-elements';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({navigation}) => {

  return(
    <ThemeProvider>

      <SafeAreaView style={styles.container}>
        <Text>Hello world</Text>
        
      </SafeAreaView>

      
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  }

})

export default Home;