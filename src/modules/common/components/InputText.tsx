import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'

const InputText = (props: any) => {
	const {name, label, error, touched, extraStyles, setFieldValue} = props
  return (
    <View>
        <Text>{label}</Text>
		<TextInput
        style={[styles.input, extraStyles]}
        {...props}
        onChangeText={value => setFieldValue(name, value)}
      />
			{error && touched ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
		padding: 10,
		height: 50,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: '#fff',
	},
	description: {
		fontSize: 13,
		//color: theme.colors.secondary,
		paddingTop: 8,
	},
	error: {
		fontSize: 13,
		//color: theme.colors.error,
		paddingTop: 8,
	},
})

export default InputText


