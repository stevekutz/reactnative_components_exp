import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		// console.log(enteredText)
		setEnteredGoal(enteredText);
	}

    return (
        <Modal visible = {props.visible} animationType = "slide">
            <View style = {styles.topContainer}>
                <TextInput
                    placeholder = "Course Goal"
                    style = {styles.input} 
                    onChangeText = {goalInputHandler}
                    value = {enteredGoal}
                />
                <Button 
                    title = "Add"
                    onPress = {() => props.addGoalHandler(enteredGoal)}
                   // onPress = {props.addGoalHandler.bind(this, enteredGoal)}
                />
            </View>
        </Modal>
    )

}

export default GoalInput;

const styles = StyleSheet.create({
    topContainer: {
        // flexDirection: 'row', 
        // justifyContent: 'space-between',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
	},
	input: {
		borderColor: 'black', 
        width: '50%',
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
	},
})