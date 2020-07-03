import React, {useState} from "react";
import {
    View, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert, 
    Text} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../init/Colors";

const Home = props => {

    const [val, setValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selected, setSelected] = useState("");
    let output;

    const inputHandler = text => {
        setValue(text.replace(/[^0-9]/g, ""))
    }

    const resetAction = () => {
        setValue('');
        setConfirmed(false);
    }

    const confirmAction = () => {
        const num = parseInt(val)
        if(isNaN(num) || num <= 0 || num > 99){
            Alert.alert(
                "Invalid number", 
                "Number must be between 0 and 99", 
                [{text:"Okay", style:"destructive", onPress:resetAction}]
                );
        }

        setConfirmed(true);
        setSelected(parseInt(val));
        setValue('');
        Keyboard.dismiss();
        
    }
    

    if(confirmed){
        output = (
        <Card style={styles.summary}>
            <Text>Selected number</Text>
            <NumberContainer>{selected}</NumberContainer>
            <Button color={Colors.primary} title="Start" onPress={ () => props.onStart(selected)} />
        </Card>
        );
    }
    
    return (
        <TouchableWithoutFeedback 
            onPress= {() => {
               Keyboard.dismiss(); 
            } }>
            <View style={styles.screen}>
                <Card style={styles.inputContainer}>
                    <Input 
                        blurOnSubmit 
                        maxLength={2} 
                        style={styles.input} 
                        keyboardType="number-pad"
                        onChangeText = {inputHandler}
                        value={val} 
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button onPress={resetAction} title="Reset" color={Colors.cancel} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={Colors.primary} onPress={confirmAction} />
                        </View>
                    </View>                
                </Card>
                {output}
            </View>
            
        </TouchableWithoutFeedback>
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
    button:{
        width: 100
    },
    input:{
        width: "75%",
        textAlign: "center"                
    },
    summary:{
        marginTop: 20
    } 
});

export default Home;