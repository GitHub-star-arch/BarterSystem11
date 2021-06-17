//All that imports exports everything like that
import React from 'react';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class ADetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Item: this.props.navigation.getParam("ADetails")["ItemName"],
            Amount: this.props.navigation.getParam("ADetails")["Amount"],
            Name: this.props.navigation.getParam("ADetails")["RequestedBy"],
            Des: this.props.navigation.getParam("ADetails")["Des"],
            ExchangeId: this.props.navigation.getParam("ADetails")["ExchangeId"],
        }
    }

    render() {
        return (
            <View>
                <Text>
                    Name: {this.state.Name}
                </Text>
                <Text>
                    Item Name: {this.state.Item}
                </Text>
                <Text>
                    Amount: {this.state.Amount}
                </Text>
                <Text>
                    Description: {this.state.Des}
                </Text>
            </View>
        );
    }
}