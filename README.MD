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

    ~~~ js
    import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';
    ~~~

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
                data = {courseGoals}
                renderItem = {itemData =>  {
                    return (
                    <View style = {styles.listItem}>
                        <Text> {itemData.item.value} </Text>
                    </View>
                    )
                }}

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