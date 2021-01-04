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

	- Launch the iPhone sumulator by either:
		- select `Run on iOS simulator` from the `Expo client` browser window on port `http://localhost:19002/`
    	- pressing `i` from the terminal window after starting project

6)  Launch the project on the Android simulator 
	- install Android Studio 
    - under Configure-SDK Manager, select several Androis SDK Platform package
    - under Configure-AVD Manager, select the `play` button on one of the installed `Virtual Devices`

  	- Launch the iPhone sumulator by either:
        - select `Run on Android simulator` from the `Expo client` browser window on port `http://localhost:19002/`
        - pressing `a` from the terminal window after starting project


### Setting up the App

1) Setup basic layout using `View` component

    - every `View` uses `Flexbox` by default

    ~~~ js
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
    return (
        <View>
            <View>
            
            </View>
            <View>
            
            </View>

        </View>
    );
    }

    const styles = StyleSheet.create({

    });
    ~~~


