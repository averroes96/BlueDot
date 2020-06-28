import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goals}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    goals:{
        marginVertical:10,
        backgroundColor: "#eee",
        padding:10,
        alignItems:"center",
        borderBottomWidth:1
    }
});

export default GoalItem;