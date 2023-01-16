import React from 'react'
import {View, StyleSheet} from 'react-native'
import ButtonDefault from '../../../common/components/ButtonDefault'
import InputText from '../../../common/components/InputText'

interface FormProps {
    formik: any
}

const FormSignIn = ({formik}: FormProps) => {
    const {handleSubmit, setFieldValue, errors, touched, values} = formik
  return (
    <View style={{width: '100%', padding: 10}}>
        <InputText 
            name='email' label='EMAIL'  
            setFieldValue={setFieldValue}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            placeholder='email'/>
        <InputText 
            name='password' 
            label='PASSWORD' 
            setFieldValue={setFieldValue}
            value={values.password}
            error={errors.password} 
            touched={touched.password}  
            secureTextEntry={true}
            placeholder='PASSWORD'/>
        <ButtonDefault text='Hola boton' onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50
  }
})

export default FormSignIn
