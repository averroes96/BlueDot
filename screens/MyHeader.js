import React, { useState } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Icon, Header} from "react-native-elements";
import logo from "../assets/logo.png"; 
import Colors from "../init/Colors";
import MySideBar from "./MySideBar";

const MyHeader = props => {

    const [sideBar, setSideBar] = useState(false);
    let sidebar;

    const menuAction = () => {
        setSideBar(true)
    }

    if(sideBar){
        sidebar = <MySideBar />
    }
    return(
        /*<View style={styles.header}>
            <View>
                <Icon name="menu" />
            </View>
            <Image style={styles.logoStyle} source={logo}/>
        </View>*/

        <Header backgroundColor="white" style={styles.header}
            leftComponent={{ icon: 'menu', color: Colors.primary, onPress: props.onMenu }}
            centerComponent={<Image style={styles.logoStyle} source={logo}/>}
            rightComponent={{ icon: 'home', color: Colors.primary }}

        />        
        
    );
}

const styles = StyleSheet.create({

    header:{
        width: "100%",
        height: 100,
        paddingTop: 32,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation:3
        
    },
    logoStyle:{
        width:"55%",
        height:"50%"
    }

});

export default MyHeader;