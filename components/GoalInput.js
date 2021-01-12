import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		// console.log(enteredText)
		setEnteredGoal(enteredText);
	}

    const goalInputFieldHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
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

                <View style = {styles.controlButtonsContainer}>
                    <View style = {styles.buttonStyle}>
                        <Button
                            // style = {styles.buttonStyle}
                            title = "Cancel"
                            color = "red"
                            onPress = {props.cancelAddGoal}                    
                        />                                        
                    </View>
                    <View style = {styles.buttonStyle}>
                        <Button 
                            title = "Add"
                            onPress = {goalInputFieldHandler}
                            // onPress = {() => props.addGoalHandler(enteredGoal)}
                        // onPress = {props.addGoalHandler.bind(this, enteredGoal)}
                        />                    
                    </View>
                </View>
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
    controlButtonsContainer: {
        // backgroundColor: 'yellow',
        // borderColor: 'yellow',
        // borderWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
    },
    buttonStyle: {
        //backgroundColor: 'gray',  
        // borderColor: 'black',
        width: 90,
        margin: 2,
        borderWidth: 1,
        borderRadius: 5,
    }
})