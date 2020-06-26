import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (value) => {
    setGoal(value);
  }

  const addBtnHandler = () => {
    setGoals(currentGoals => [
      ...currentGoals, 
      {
        key: Math.random().toString(), 
        value: goal
      }
    ]);
  }

  return (
    <View style={{flex:1}}>
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
          <Button title="ADD GOAL" onPress={addBtnHandler} />
        </View>
      </View>
      <FlatList
        data={goals} 
        renderItem={goal => 
          <View>
          <Text style={styles.goals}>{goal.item.value}</Text>
          </View>        
      }>
      </FlatList>
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
  },
  goals:{
    marginVertical:10
  }
});
