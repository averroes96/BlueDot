import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../init/Colors";

const NumberContainer = props => {

    return(
        <View style={styles.container} >
            <Text style={styles.selected}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    selected:{
        color: Colors.primary,
        fontSize: 20
    }
});

export default NumberContainer;