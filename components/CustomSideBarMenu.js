import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from 'firebase'

export default class CustomSideBarMenu extends React.Component {

    render() {
        return (
            <View>
                <DrawerItems {...this.props} />
                <TouchableOpacity onPress={()=>{
                    firebase.auth().signOut();
                    this.props.navigation.navigate("WelcomeScreen")
                }}>
                    <Text>
                        Log Out {/*Scam*/}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}