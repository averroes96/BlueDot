import React from "react";
import {TextInput, StyleSheet} from "react-native";

import Colors from "../init/Colors";

const Input = props => {
    return <TextInput {...props} placeholder="Select a number" style={{...styles.input, ...props.style}} /> ;
}

const styles = StyleSheet.create({
    input:{
        marginVertical:20,
        height: 40,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1
    }   
});

export default Input;