import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 80,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'none',
		letterSpacing: 2,
		//fontFamily: 'Roboto',
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
		width: '85%',
		maxHeight: '60%',
		backgroundColor: 'rgba(255, 255, 255, 0.25)',
		//backgroundColor: '#fff',
		backdropFilter: 'blur(12px)',
		'-webkit-backdrop-filter': 'blur(12px)',
		borderRadius: 20,
		// opacity: 0.8,
	},
	image: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	logo: {
		width: '30%',
		height: 100,
		position: 'absolute',
		right: 16,
		bottom: 0,
	},
	logoContainer: {
		// width: '100%',
		// display: 'flex',
		// flex: 1,
		// alignItems: 'flex-end',
		// justifyContent: 'flex-end',
	},
	button: {
		backgroundColor: '#37236a',
		color: '#fff',
		borderRadius: 10,
		marginTop: 40,
		padding: 10,
		// '&:Press': {
		// 	outline: 'none',
		// 	boxShadow: '0 0 10px 0 #5f4f87 inset, 0 0 10px 4px #5f4f87',
		// },
	},
	textButton: {
		letterSpacing: 1.2,
		fontSize: 15,
		color: '#fff',
		textTransform: 'none',
	},
});
