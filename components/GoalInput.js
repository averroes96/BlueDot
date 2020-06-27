import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet} from "react-native";

const GoalInput = props => {

    const [goal, setGoal] = useState("");
    
    const inputHandler = (value) => {
        setGoal(value);
    }    
    return (
        <View style = {styles.screen}>
            <View 
            style = {styles.inputContainer}>
                <TextInput 
                placeholder="Your goal?" 
                style={styles.input} 
                onChangeText={inputHandler}
                value={goal}
                />  
            </View>
            <View 
            style = {styles.buttonContainer}>
                <Button title="ADD GOAL" onPress={props.onAddGoal.bind(this, goal)} />
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flexDirection:"row", 
        padding:20,
        width:'100%',
        height: 150,
        justifyContent:"space-between",
        alignItems:'stretch'    
      },
      inputContainer:{
        backgroundColor:"#eee",
        justifyContent:"center", 
        alignItems:"center",
        flex:3
      },
      input:{
        borderBottomWidth:1, 
        borderBottomColor:"#aaa", 
        padding:10, width:'80%'
      },
      buttonContainer:{
        backgroundColor:"#ddd",
        justifyContent:"center", 
        alignItems:"center",
        flex:2   
      }
});

export default GoalInput;