import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (goal) => {
		console.log(goal)

		// better way, previous state guaranteed
		setCourseGoals(currentGoals => [
            ...currentGoals, 
            { id: Math.random().toString(), value:  goal }
            ]);
		// setEnteredGoal('')
	}

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }


	return (
		<View style = {styles.screen} >
            <GoalInput 
                // enteredGoal = {enteredGoal}
                // goalInputHandler = {goalInputHandler}
                addGoalHandler = {addGoalHandler}                
            />
			<FlatList
                keyExtractor = {(item, index) => item.id}
                data = {courseGoals}
                renderItem = {itemData =>  {
                    return (
                        <GoalItem 
                            id = {itemData.item.id}
                            onDelete = {removeGoalHandler}
                            itemValue = {itemData.item.value} 

                        />
                    )
                }}		
            />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});


		// {/* Flexbox exp secion */}
		// <View 
		//     style = {{
		//         margin: 10,
		//         flexDirection: 'column',// row, column, row/column-reverse
		//         height: 400,
		//         width: '60%',
		//         // aligns children along main-axis of parent
		//         justifyContent: 'center', // flex-start/end, center, space-between/end/evenly
		//         // alignItems >> aligns children along Cross-Axis of container
		//         // for flexDirection: 'column', the Cross-Axis is the horizontal axis 
		//         alignItems: 'center', // flex-start/end, center, stretch
		//         // alignContent: 'center',
		//         borderWidth: 3,
		//         borderColor: 'deeppink',
		//         position: 'relative', // default
		//         borderRadius: 10,
		//         width: '90%',
		//         flexWrap: 'wrap',
		//     }}
			
		// >

		//     <View
		//         style = {{
		//             backgroundColor: 'red',
		//             // width: 100,
		//             // height: 100,
		//             flex: 0,
		//             // justifyContent: 'center',
		//             // alignItems: 'center',
		//             margin: 40,
		//             borderWidth: 3,
		//             padding: 100,
		//         }}
		//     >
		//         <Text> 1 </Text>
		//     </View>

		//     <View
		//         style = {{
		//             backgroundColor: 'blue',
		//             // width: 100,
		//             // height: 100,

		//             // amount of space to fill proportional to sum of all children using 'flex'
		//             flex: 2,
		//             // aligns children along main-axis of parent
		//             // justifyContent: 'center', // flex-start/end, center, space-between/end/evenly
		//             // // alignItems >> aligns children along Cross-Axis of container
		//             // alignItems: 'center', // flex-start/end, center, stretch
		//             margin: 5,
		//             alignSelf: 'flex-start', // flex-start/end, center, stretch
		//             // alignContent >> like alignItems but ONLY works with items using flexWrap

		//         }}
		//     >
		//         <Text> 2 </Text>
		//     </View>

		//     <View
		//         style = {{
		//             backgroundColor: 'green',
		//             // width: 100,
		//             // height: 150,
		//             flex: 3,
		//             justifyContent: 'center',
		//             alignItems: 'center',
		//             margin: 5,
		//         }}
		//     >
		//         <Text> 3 </Text>
		//     </View>

		//                 <View
		//         style = {{
		//             backgroundColor: 'purple',
		//             // width: 100,
		//             // height: 100,
		//             // flex: 3,
		//             justifyContent: 'center',
		//             alignItems: 'center',
		//             margin: 5,
		//         }}
		//     >
		//         <Text> 3 </Text>
		//     </View>

		// </View>