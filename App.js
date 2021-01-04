import React from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';


export default function App() {
  return (
    <View style = {{padding: 50}}>
        <View style = {{flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center'}}>
            <TextInput
                placeholder = "Course Goal" 
                style = {{borderColor: 'black', 
                    width: '50%',
                    borderWidth: 1, 
                    padding: 10,
                }}
            />
            <Button 
                title = "button here"
            />
        </View>

        <View 
            style = {{
            margin: 10,
            flexDirection: 'row',// row, column, row/column-reverse
            height: 300,
            width: '60%',
             // aligns children along main-axis of parent
                    justifyContent: 'space-evenly', // flex-start/emd, center, space-between/end/evenly
            alignItems: 'stretch',
            borderWidth: 3,
            borderColor: 'deeppink',
            position: 'relative', // default
            borderRadius: 10,
            width: '90%',
            }}
            
        >
            <View
                style = {{
                    backgroundColor: 'red',
                    // width: 100,
                    // height: 100,
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                    borderWidth: 3,
                }}
            >
                <Text> 1 </Text>
            </View>

            <View
                style = {{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,

                    // amount of space to fill proportional to sum of all children using 'flex'
                    flex: 2,
                    // aligns children along main-axis of parent
                    justifyContent: 'center', // flex-start/emd, center, space-between/end/evenly
                    // alignItems >> aligns children along Cross-Axis of container
                    alignItems: 'center', // flex-start/end, center, stretch
                    margin: 5,
                    alignSelf: 'flex-start', // flex-start/end, center, stretch
                    // alignContent >> like alignItems but ONLY works with items using flexWrap

                }}
            >
                <Text> 2 </Text>
            </View>

            <View
                style = {{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                }}
            >
                <Text> 3 </Text>
            </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({



});
