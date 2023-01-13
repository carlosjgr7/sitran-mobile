import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Input from './TextInput';

const bg = require('../../Images/login-background.jpeg');

const Login = (): JSX.Element => {
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });
	return (
		<View style={styles.container}>
			<ImageBackground source={bg} resizeMode='cover' style={styles.image}>
				<View style={styles.container2}>
					<Text style={styles.title}>Sitran</Text>
					<Text style={styles.subTitle}>Bienvenido a Tranred</Text>
					<Input
						label='Email'
						returnKeyType='next'
						value={email.value}
						onChangeText={(text: string) => setEmail({ value: text, error: '' })}
						error={!!email.error}
						errorText={email.error}
						autoCapitalize='none'
						autoCompleteType='email'
						textContentType='emailAddress'
						keyboardType='email-address'
					/>
					<Input
						label='Email'
						returnKeyType='next'
						value={email.value}
						onChangeText={(text: string) => setEmail({ value: text, error: '' })}
						error={!!email.error}
						errorText={email.error}
						autoCapitalize='none'
						autoCompleteType='email'
						textContentType='emailAddress'
						keyboardType='email-address'
					/>
					<StatusBar style='auto' />
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 80,
		color: '#fff',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
	},
	subTitle: {
		fontSize: 15,
		color: '#000',
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default Login;