import {
	StyleSheet
} from 'react-native';

let styles = StyleSheet.create({
	image: {
		flex: 1,
		height: 200,
		margin: 5,
		borderRadius: 10
	},
	grid: {
		backgroundColor: '#fff',
		margin: 5,
		borderRadius: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 1.0,
		elevation: 2
	},
	col: {
		alignItems: 'center',
		height: 'auto',
		padding: 10,
		borderRightColor: '#00000010',
		borderRightWidth: 1
	},
	buttonText: {
		fontSize: 15,
		color: '#3F51B5',
		fontWeight: 'bold'
	},
	last: {
		borderRightColor: 'transparent'
	},
	buttonIcon: {
		fontSize: 20,
		color: '#3F51B5',
	},
	content: {
		backgroundColor: '#eee'
	}
});

export default styles;