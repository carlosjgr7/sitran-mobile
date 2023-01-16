import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, Image, Text, View, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import Input from './TextInput';

const bg = require('../../Images/fondoTranred.jpeg');
const logo = require('../../Images/tranred-logo.png');

const Login = (): JSX.Element => {
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });

	const handleLogin = () => {
		console.log('email:', email);
		console.log('pass:', password);
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={bg} resizeMode='cover' style={styles.image}>
				<View style={styles.container2}>
					<Text style={styles.title}>Sitran</Text>
					{/* <Text style={styles.subTitle}>Bienvenido a Tranred</Text> */}
					{/* <Image style={styles.logo} resizeMode='contain' source={logo} /> */}
					<Input
						secureTextEntry={false}
						label='Login'
						returnKeyType='next'
						value={email.value}
						onChangeText={(text: string) => setEmail({ value: text, error: '' })}
						error={!!email.error}
						errorText={email.error}
						autoCapitalize='none'
						placeholder='*********'
						type='text'
						autoCompleteType='email'
						textContentType='emailAddress'
						keyboardType='email-address'
					/>
					<Input
						secureTextEntry={true}
						label='Contrasena'
						returnKeyType='next'
						placeholder='*********'
						value={password.value}
						onChangeText={(text: string) => setPassword({ value: text, error: '' })}
						error={!!password.error}
						errorText={password.error}
						autoCapitalize='none'
						autoCompleteType='password'
						textContentType='password'
						keyboardType='password'
					/>
					<TouchableHighlight
						onPress={handleLogin}
						style={styles.button}
						underlayColor='#5f4f87'
						//activeOpacity={0.9}
					>
						<Text style={styles.textButton}>Iniciar sesión</Text>
					</TouchableHighlight>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} resizeMode='contain' source={logo} />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default Login;
