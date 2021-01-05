import React from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';


export default function App() {
  return (
    <View style = {styles.screen}>
        <View style = {styles.topContainer}>
            <TextInput
                placeholder = "Course Goal"
                style = {styles.input} 
            />
            <Button 
                title = "button here"
            />
        </View>
        <View />


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
    }


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