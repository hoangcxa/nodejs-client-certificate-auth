/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
// import agent from './agent';

const serverUrl = 'https://localhost:4433/authenticate';
// let opts = { httpsAgent: agent('bob') };

const App: () => React$Node = () => {
	const [ data, setData ] = useState(null);

	const handleCallApi = () => {
		console.log(33333);
		axios
			.get(serverUrl)
			.then((res) => {
				console.log(111111, res);
			})
			.catch((err) => {
				console.error(222222, err);
			});
	};

	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
					<Header />
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)}
					<View style={styles.body}>
						<TouchableOpacity onPress={handleCallApi}>
							<Text>Call Api</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text>Call Api with SSL</Text>
						</TouchableOpacity>
					</View>
					{/* <View>{data.toString()}</View> */}
				</ScrollView>
			</SafeAreaView>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter
	},
	engine: {
		position: 'absolute',
		right: 0
	},
	body: {
		backgroundColor: Colors.white
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark
	},
	highlight: {
		fontWeight: '700'
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right'
	}
});

export default App;
