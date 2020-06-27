import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [goals, setGoals] = useState([]);

  const addBtnHandler = (goal) => {
    setGoals(currentGoals => [
      ...currentGoals, 
      {
        key: Math.random().toString(), 
        value: goal
      }
    ]);
  }

  const deleteItem = (itemID) => {
    setGoals(goals => {
      return goals.filter((goal) => goal.key != itemID);
    });
  }

  return (
    <View style={{flex:1}}>
      <GoalInput onAddGoal={addBtnHandler} />
      <FlatList
        data={goals} 
        renderItem={goal => 
          <GoalItem id = {goal.item.key} item = {goal.item.value} onDelete = {deleteItem}/>
      }>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({

});
