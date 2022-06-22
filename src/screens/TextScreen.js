import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');
	const pwdError = 'Password must be longer than 5 characters';
	return (
		<View>
			<Text style={ styles.label }>Enter Password:</Text>
			<TextInput
				style={ styles.input }
				autoCapitalize="none"
				autoCorrect={ false }
				onChangeText={ (name) => setName(name) }
				defaultValue={ name }
				value={ name }
				onSubmitEditing={ () => setName('') }
			/>
			<Text style={ styles.errorText }>{ (name.length < 6) ? pwdError : '' }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 5,
		borderColor: 'black',
		borderWidth: 1
	},
	errorText: {
		marginLeft: 15,
		fontSize: 15,
		fontStyle: "italic",
		color: "red"
	},
	label: {
		marginLeft: 15,
		fontSize: 20,
		fontWeight: "700"
	}
});

export default TextScreen;