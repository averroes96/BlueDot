import React, { useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    Button,
    Text,
    Alert
} from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../init/Colors";

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random() * (max - min) + min);
    if(rand == exclude){
        return generateNumber(min, max, exclude);
    }
    else{
        return rand;
    }
}

const Game = props => {
    const [guess, setGuess] = useState(generateNumber(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);    

    const min = useRef(1);
    const max = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(guess == userChoice){
            onGameOver(rounds);
        }
    }, [guess, userChoice, onGameOver]);

    const nextGuess = (direction) => {

        if((direction == "lower" && guess < props.userChoice) || (direction == "greater" && guess > props.userChoice)){
            Alert.alert(
                "Error", 
                "Something is wrong !", 
                [{text:"Okay", style:"cancel"}]);
        }
        else{
            if(direction == "lower"){
                max.current = guess;
            }
            else{
                min.current = guess;
            }
            setGuess(generateNumber(min.current, max.current, guess));
            setRounds(curRounds => curRounds++);
    
        }
    }    

    return (
        <View style={styles.screen}>
            <Text>AI guess</Text>
            <NumberContainer>{guess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button color={Colors.secondary} title="Lower" onPress={nextGuess.bind(this, "lower")}/>
                <Button color={Colors.secondary} title="Greater" onPress={nextGuess.bind(this, "greater")} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        padding: 10,
        alignItems: "center"
    },
    buttonContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:15
    },
    secondary:{
        color: Colors.primary
    }    
});

export default Game;