import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, Modal} from "react-native";

const GoalInput = props => {

    const [goal, setGoal] = useState("");
    
    const inputHandler = (value) => {
        setGoal(value);
    }
    
    const addGoalAction = () => {
      props.onAddGoal(goal);
      setGoal("");
    }

    return (
      <Modal visible={props.visible} animationType="slide" >
        <View style = {styles.screen}>
            <View 
            style = {styles.inputContainer}>
                <TextInput 
                placeholder="Your goal?" 
                style={styles.input} 
                onChangeText={inputHandler}
                value={goal}
                />
              <View style = {styles.buttonContainer}>
                <View style={{width:"40%"}}>
                  <Button title="ADD" onPress={addGoalAction} />
                </View>
                <View style={{width:"40%"}}>
                  <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>    
              </View>                  
            </View>
      </View>
      </Modal>  
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexDirection:"row", 
        padding:10,
        width:'100%',
        height: 150,
        justifyContent:"space-between",
        alignItems:'stretch'    
      },
      inputContainer:{
        backgroundColor:"#eee",
        justifyContent:"center", 
        alignItems:"center",
        flex:1
      },
      input:{
        borderBottomWidth:1, 
        borderBottomColor:"#aaa", 
        padding:10, width:'80%',
        marginVertical:10
      },
      buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between", 
        alignItems:"center",
        width:"60%" 
      }
});

export default GoalInput;