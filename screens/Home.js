import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import Card from "../components/Card";

const Home = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <TextInput placeholder="Select a number" />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={ () => {}} />
                    <Button title="Confirm" onPress={ () => {}} />
                </View>                
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        padding: 10,
        alignItems: "center"
    },
    buttonContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    inputContainer:{
        alignItems:"center",
        width: 300,
        maxWidth: "100%",
    },    
});

export default Home;