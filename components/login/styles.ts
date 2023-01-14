import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 80,
		color: '#fff',
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		padding: 20,
	},
	subTitle: {
		fontSize: 15,
		color: '#000',
	},
	container2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		width: '90%',
		maxHeight: '65%',
		backgroundColor: 'rgba(255, 255, 255, .2)',
		borderRadius: 20,
		// opacity: 0.8,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	logo: {
		width: '80%',
		height: 100,
		// padding: 10,
		// margin: 20,
		position: 'absolute',
		top: 10,
		left: 20,
		right: 0,
		// backgroundColor: '#fff',
		// borderRadius: 10,
	},
	button: {
		backgroundColor: '#841584',
		color: '#fff',
		borderRadius: 10,
		marginTop: 40,
		padding: 10,
	},
	textButton: {
		letterSpacing: 1.2,
		fontSize: 15,
		color: '#fff',
		textTransform: 'none',
	},
});
