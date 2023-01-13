import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
//import { TextInput as Input } from 'react-native-paper';
//import { theme } from '../core/theme';

interface Props {}

export default function Input({ errorText, description, ...props }: any) {
	return (
		<>
			<TextInput placeholder='jesus@gmail.com' style={styles.input} {...props} />
			{description && !errorText ? <Text style={styles.description}>{description}</Text> : null}
			{errorText ? <Text style={styles.error}>{errorText}</Text> : null}
		</>
	);
}

const styles = StyleSheet.create({
	input: {
		//backgroundColor: theme.colors.surface,
		// borderWidth: 1,
		// borderColor: 'gray',
		padding: 10,
		height: 50,
		width: '80%',
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
});
