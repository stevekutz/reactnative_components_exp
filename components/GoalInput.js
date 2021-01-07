import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		// console.log(enteredText)
		setEnteredGoal(enteredText);
	}

    return (
        <View style = {styles.topContainer}>
            <TextInput
                placeholder = "Course Goal"
                style = {styles.input} 
                onChangeText = {goalInputHandler}
                value = {enteredGoal}
            />
            <Button 
                title = "button here"
                onPress = {() => props.addGoalHandler(enteredGoal)}
            />
        </View>
    )

}

export default GoalInput;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
	},
	input: {
		borderColor: 'black', 
        width: '50%',
        borderWidth: 1, 
        padding: 10,
	},
})