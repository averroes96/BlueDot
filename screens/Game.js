import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Button,
    Text
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
    const [guess, setGuess] = useState(generateNumber(1, 100, props.selected));

    return (
        <View style={styles.screen}>
            <Text>AI guess</Text>
            <NumberContainer>{guess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button color={Colors.secondary} title="Lower" onPress={() => {}}/>
                <Button color={Colors.secondary} title="Greater" onPress={() => {}} />
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