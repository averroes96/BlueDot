import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import logo from "../assets/logo.png"; 

const Header = props => {
    return(
        <View style={styles.header}>
            <Image style={styles.logoStyle} source={logo}/>
        </View>
    );
}

const styles = StyleSheet.create({

    header:{
        width: "100%",
        height: 100,
        paddingTop: 32,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    logoStyle:{
        width:"30%",
        height:"40%"
    }

});

export default Header;