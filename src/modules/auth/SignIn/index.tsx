import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import FormSignIn from './components/FormSignIn'
import useSignIn from './hooks/useSignIn';

const bg = require('../../../../Images/fondoTranred.jpeg');

const SignIn = () => {
  const {formik} = useSignIn()

  return (
    
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode='cover' style={styles.background}>
        <FormSignIn formik={formik}/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'gray',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  }
})


export default SignIn
