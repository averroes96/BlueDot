import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const addBtnHandler = (goal) => {
    if(goal.length == 0)
      return;

    setGoals(currentGoals => [
      ...currentGoals, 
      {
        key: Math.random().toString(), 
        value: goal
      }
    ]);
    setModal(false);
  }

  const deleteItem = (itemID) => {
    setGoals(goals => {
      return goals.filter((goal) => goal.key != itemID);
    });
  }

  const cancelAction = () => {
    setModal(false);
  }  

  return (
    <View style={{flex:1, padding: 50}}>
      <Button title="Add Goals" onPress={() => setModal(true)}/>
      <GoalInput visible={modal} onAddGoal={addBtnHandler} onCancel={cancelAction} />
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
