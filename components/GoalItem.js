import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const GoalItem = props => {

    return (
        <View style = {styles.listItem}>
            <Text> {props.itemValue} </Text>
        </View>    
    )

}

export default GoalItem;

const styles = StyleSheet.create ({
    listItem: {
        padding: 10,
        backgroundColor: 'deeppink',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'dodgerblue',
        margin: 2,	
	}
})