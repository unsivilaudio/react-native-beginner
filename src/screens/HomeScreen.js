import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={ styles.text }>Hey There!</Text>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Components') }
				title="Go to Components Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('List') }
				title="Go to List Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Images') }
				title="Go to Images Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Counter') }
				title="Go to Counter Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Colors') }
				title="Go to Colors Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Square') }
				title="Go to Square Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Text') }
				title="Go to Text Demo"
			/>
			<Button
				style={ styles.button }
				onPress={ () => navigation.navigate('Box') }
				title="Go to Box Demo"
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	},
	button: {
		lineHeight: 1.2
	}

});

export default HomeScreen;
