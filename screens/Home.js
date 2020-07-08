import React, {useState} from "react";
import {
    View, 
    StyleSheet,   
    Text,
    FlatList,
    ImageBackground} from "react-native";
import { Card, Button, Icon } from 'react-native-elements';

const posts = [
    {
       id: "1",
       type: "مقالات",
       title: "تجربتي مع النقطة الزرقاء",
       uri: '../assets/logo.png'
    },
    {
        id: "2",
        type: "فنون وثقافات",
        title: "الموسيقى، ترنيمة الحياة",
        uri: '../assets/logo.png'
     },
     {
        id: "3",
        type: "نصوص",
        title: "سارة نموذج الطفولة المغتصبة...!",
        uri: '../assets/logo.png'
     },                 
   ]

const Home = props => {
    
    return (
            <View>
                <FlatList
                    data={posts}
                    renderItem={ itemData => (
                        <Card
                            
                            title={itemData.item.title}
                            >
                            <ImageBackground source={{ uri: itemData.item.uri}}>
                            <Text>Inside</Text>
                            </ImageBackground>
                            <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW' />  
                        </Card>                  
                    )} />
                    
            </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
      }
});

export default Home;