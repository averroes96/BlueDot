import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
//import GoalItem from "./components/GoalItem";
//import GoalInput from "./components/GoalInput";
import MyHeader from "./screens/MyHeader";
import Home from "./screens/Home";
//import Game from "./screens/Game";
//import GameOver from "./screens/GameOver";
//import Posts from "./screens/Posts";

function HomeAction({ navigation }) {
  return (
    <View>
      <MyHeader onMenu={() => navigation.openDrawer()} />
      <Home />
    </View>
    
  );
}

function CustomDrawerContent(props){
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      drawerStyle={{
        width: 300,
      }} 
      drawerContent={props => <CustomDrawerContent {...props} />} 
      initialRouteName="Home" >
        <Drawer.Screen name="الرئيسية" component={HomeAction}/>
        <Drawer.Screen name="مقالات" component={HomeAction} />
        <Drawer.Screen name="مراجعات" component={HomeAction} />
        <Drawer.Screen name="حوارات" component={HomeAction} />
        <Drawer.Screen name="إنضم إلينا" component={HomeAction} />
    </Drawer.Navigator>
  );
}

export default function App() {
  /*
  const [number, setNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startAction = (selected) => {
    setNumber(selected);
    setNumberOfRounds(0);
  }

  const setNumberOfRounds = (numRounds) => {
    setRounds(numRounds);
  }
  
  //const [goals, setGoals] = useState([]);
  //const [modal, setModal] = useState(false);

  /*const addBtnHandler = (goal) => {
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



  let content = <Home onStart={startAction} />
  
  if(number && rounds == 0){
    content = <Game userChoice = {number} onGameOver={setNumberOfRounds} />
  }
  else if( rounds > 0){
    content = <GameOver numRounds={rounds} />
  }*/  

  return (

    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>

    /*<View style={{flex:1, padding: 50}}>
      <Button title="Add Goals" onPress={() => setModal(true)}/>
      <GoalInput visible={modal} onAddGoal={addBtnHandler} onCancel={cancelAction} />
      <FlatList
        data={goals} 
        renderItem={goal => 
          <GoalItem id = {goal.item.key} item = {goal.item.value} onDelete = {deleteItem}/>
      }>
      </FlatList>
    </View>*/
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    },
    sideItems:{
      textAlign: "right"
    }
});