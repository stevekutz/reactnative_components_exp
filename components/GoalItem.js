import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Pressable, TouchableHighlight} from 'react-native';


const GoalItem = props => {

    return (
        // alternative way using bind
        // <TouchableOpacity activeOpacity = {0.8} onPress = {props.onDelete.bind(this, props.id)} >
        <TouchableOpacity activeOpacity = {0.8} onPress = {() => props.onDelete(props.id)} >
            <View style = {styles.listItem}>
                <Text> {props.itemValue} </Text>
            </View>    
        
        </TouchableOpacity>

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


// <TouchableOpacity activeOpacity = {0.8} onPress = {props.onDelete.bind(this, props.id)} >