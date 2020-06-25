import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View 
      style = {{
        flexDirection:"row", 
        padding:20,
        width:'100%',
        height: 300,
        justifyContent:"space-between",
        alignItems:'stretch'
         }}>
      <View 
        style = {{
          backgroundColor:"#eee",
          justifyContent:"center", 
          alignItems:"center",
          flex:3
          }}>
      <TextInput 
        placeholder="Your goal?" 
        style={{borderBottomWidth:1, borderBottomColor:"#aaa", padding:10, width:'80%'}} 
        />
      </View>
      <View 
        style = {{
          backgroundColor:"#ddd",
          justifyContent:"center", 
          alignItems:"center",
          flex:2          
          }}>
         <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
