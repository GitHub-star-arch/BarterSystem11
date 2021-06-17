//All that imports exports everything like that
import React from 'react';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Item: this.props.navigation.getParam("Details")["Item"],
      Amount: this.props.navigation.getParam("Details")["Amount"],
      Name: this.props.navigation.getParam("Details")["Name"],
      Des: this.props.navigation.getParam("Details")["Des"],
      ExchangeId: this.props.navigation.getParam("Details")["ExchangeId"],
    }
  }

  updateBarterScreen = () => {
    db.collection("barters").add({
      ItemName: this.state.Item,
      ExchangeId: this.state.ExchangeId,
      RequestedBy: this.state.Name,
      Donor: firebase.auth().currentUser.email,
      RequestStatus: "Donor Interested",
      Des: this.state.Des,
      Amount: this.state.Amount,
    })
    db.collection("notifications").add({
      ItemName: this.state.Item,
      ExchangeId: this.state.ExchangeId,
      RequestedBy: this.state.Name,
      Donor: firebase.auth().currentUser.email,
      RequestStatus: "Donor Interested",
      Des: this.state.Des,
      Amount: this.state.Amount,
      NotificationStatus: "Unread",
    })
    this.props.navigation.navigate('Buy')
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
          Description: {this.state.Des}
        </Text>
        <TouchableOpacity onPress={()=>{this.updateBarterScreen()}}>
          <Text>
            I want to exchange
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: "coral",
    borderWidth: 5,
    width: 100,
    height: 40,
    marginTop: 10,
    borderColor: "blue",
  },
})