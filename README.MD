### Project Setup

1) Install `Expo` client

	- this behaves as a `wrapper` around your `React Native App`
	- `Expo` is a third-party service that provides a convenient development workflow to reduce the complexity of implementing `React Native` features from scratch
	- `Expo` limits the full control available in the `React Native` development environments available in `Xcode` and `Android Studio`

		~~~ bash
		npm install expo-cli --global
		~~~

2) Create a `React Native` project using `expo-init  [projectName]`

   - choose the `blank` template
   - in the underlined `name` field, enter a name. This will show up in the browser tab when the project is launched

		~~~ bash
		expo init reactnative_components_exp
		~~~

3) Launch project into the browser
	- use `yarn start` or `npm start` from the terminal
	- this will launch in the browser on port `http://localhost:19002/`
	- use `CTRL + C` to quit
	- while launched, open `VS Code` to see the default code and review `App.js`

4) Launch the project on your iPhone
	- Install `Expo client` from the app store
	- Open the `iPhone camera app` and hold it over the `QR code`

5) Launch the project on the Xcode iPhone simulator
	- install Xcode
	- make sure `Command Line Tools` is installed under `Preferences/Locations`

	- Launch the iPhone simulator by either:
		- select `Run on iOS simulator` from the `Expo client` browser window on port `http://localhost:19002/`
    	- pressing `i` from the terminal window after starting project

6)  Launch the project on the Android simulator
	- install Android Studio
    - under Configure-SDK Manager, select several Android SDK Platform packages
    - under Configure-AVD Manager, select the `play` button on one of the installed `Virtual Devices`

  	- Launch the iPhone simulator by either:
        - select `Run on Android simulator` from the `Expo client` browser window on port `http://localhost:19002/`
        - pressing `a` from the terminal window after starting project


### Setting up the App

1) Setup basic layout using `View` component

    - every `View` uses the `Flexbox` by default
    - the `Stylesheet` is a `Core Component` used to provide styling simular to CSS. Some `Core Components`, such as `View` have more props available for styling than others such as `Text`
    - `onPress` handler creates a `PressEvent` object as its first argument
    - `onChangeText` is a `callback` that passes  string of changed text back to the handler `goalInputHandler`
    - 

    ~~~ js
    import React, {useState} from 'react';
    import { StyleSheet, Text, View , TextInput, Button} from 'react-native';


    export default function App() {

        const [enteredGoal, setEnteredGoal] = useState('');
        const [courseGoals, setCourseGoals] = useState([]);

        // // another way
        // function goalInputHandler (enteredText) {
        // 	console.log(enteredText)
        // 	setEnteredGoal(enteredText)
        // }

        const goalInputHandler = (enteredText) => {
            // console.log(enteredText)
            setEnteredGoal(enteredText);
        }

        const addGoalHandler = () => {
            console.log(enteredGoal)
            // // simple way, but previous State not always guaranteed
            // setCourseGoals([...courseGoals, enteredGoal]);

            // better way, previous state guaranteed
            setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
            setEnteredGoal('')
        }


        return (
            <View style = {styles.screen}>
                <View style = {styles.topContainer}>
                    <TextInput
                        placeholder = "Course Goal"
                        style = {styles.input} 
                        onChangeText = {goalInputHandler}
                        value = {enteredGoal}
                    />
                    <Button 
                        title = "button here"
                        onPress = {addGoalHandler}
                    />
                </View>
                <View>
                    {courseGoals.map((goal, index) => {
                        return (
                            <View key = {index} style = {styles.listItem}>
                                <Text> {goal} </Text>
                            </View>
                        )
                    })}
                </View>


            </View>
        );
    }

    const styles = StyleSheet.create({
        screen: {
            padding: 50,
        },
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
        listItem: {
            padding: 10,
            backgroundColor: 'deeppink',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'dodgerblue',
            margin: 2,	
        }

    });
    ~~~

2) Implement a `FlatList` to render array items

    - `addGoalHandler` is modified to return an obj and an id    
    - `enteredGoal` hook and `goalInputHandler` moved into `GoalInput`
    - `addGoalHandler` passed in as a prop to `GoalInput`
    - `addGoalHandler` receives the `goal` argument


    ~~~ js
    // better way, previous state guaranteed
    setCourseGoals(currentGoals => [
        ...currentGoals, 
        { key: Math.random().toString(), value:  enteredGoal }
        ]);
    setEnteredGoal('')
    ~~~


    - `data` represents a plain array
    - `renderItem`

    ~~~ js
    import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';
    ~~~

    - `Flatlist` includes many features to managed rendered a list of items

    ~~~ js
    return (
    <View style = {styles.screen}>
    <View style = {styles.topContainer}>
        <TextInput
            placeholder = "Course Goal"
            style = {styles.input} 
            onChangeText = {goalInputHandler}
            value = {enteredGoal}
        />
        <Button 
            title = "button here"
            onPress = {addGoalHandler}
        />
    </View>
    <FlatList
        keyExtractor = {(item, index) => item.id}
        data = {courseGoals}
        renderItem = {itemData =>  {
            return (
                <View style = {styles.listItem}>
                    <Text> {itemData.item.value} </Text>
                </View>
            )
        }
    />
    </View>
    );

    ~~~

    ~~~ js
   // better way, previous state guaranteed
   setCourseGoals(currentGoals => [
         ...currentGoals, 
         { key: Math.random().toString(), value:  enteredGoal }
         ]);
   setEnteredGoal('')
    ~~~

3) Separate Components

    - Create `GoalInput` and `GoalItem` components

    ~~~ js
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
    ~~~

    ~~~ js
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
    ~~~

    ~~~ js
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

        return (
            <View style = {styles.screen}>
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
                            <GoalItem itemValue = {itemData.item.value} />
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
    ~~~

4) Add delete functionality

    - `Pressable` is used iunstead of `onClick`
    - `removeGoalHandler` from `App` is passed as a prop into `GoalItem` which also receives an id and value prop
    - `keyExtractor` locates a unique key for given item at a specific index
    - `data` identifies a `plain array`
    - `renderItem` extracts an item from the array designated in `data` and renders it as a list item

        ~~~ js
        // App.js
        ...
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
        ...
        ~~~

        - `TouchableOpacity` is used to indicate actively pressed item
        - `onPress` can call the `onDelete` handler using `bind` or an `arrow function`

        ~~~ js
        ... 
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
        ~~~

5) Add Cancel Button and styling        

    - `goalInputFieldHandler` is used to manage adding a goal and resetting `TextInput` to blank field
    - styling `Button` components only occurs when they are wrapped in a `View` component


    ~~~ js
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
    ~~~

    - `cancelAddGoal` is passed into `GoalInput` from `App`

    ~~~ js
    // App.js
    ...
    const cancelAddGoal = () => {
    setModalActive(false)

    }


    return (
    <View style = {styles.screen} >
        <Button title = 'Add New Goal' onPress = {() => setModalActive(true)}/>
        <GoalInput 
            // enteredGoal = {enteredGoal}
            // goalInputHandler = {goalInputHandler}
            visible = {modalActive}
            addGoalHandler = {addGoalHandler}   
            cancelAddGoal = {cancelAddGoal}             
        />
    <FlatList
    ...
    ~~~