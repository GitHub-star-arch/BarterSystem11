import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class Sell extends React.Component {

  addItem = () => {
    db.collection('Items').add({
      Item: this.state.Item,
      Amount: this.state.Amount,
      Name: this.state.Name,
      Des: this.state.Des,
      ExchangeId: Math.random().toString(36).substring(7),
      doc: '',
    })
  }

  constructor() {
    super();
    this.state = {
      Item: '',
      Amount: '',
      Name: '',
      Des: '',
    }
  }

  componentDidMount = () => {
    db.collection('Users').where('email', '==', firebase.auth().currentUser.email)
    .onSnapshot((snapshot)=>{snapshot.forEach((doc)=>{var document = doc.data(); this.setState({ doc: doc.id })})})
  }

  addNumber = () => {
    db.collection('Users').doc(this.state.doc).update({
      isItemRequestActive: firebase.firestore.FieldValue.increment(1),
    })
  }

  render() {
    if ( isItemRequestActive < 5 ) {
      return (
        <View>
          <Text>Sell</Text>
          <TextInput placeholder="Enter Item Name" onChangeText={(text) => { this.setState({ Item: text }) }} style={styles.input} />
          <TextInput placeholder="Enter Item Value" onChangeText={(text) => { this.setState({ Amount: text }) }} style={styles.input} />
          <TextInput placeholder="Enter Your Name" onChangeText={(text) => { this.setState({ Name: text }) }} style={styles.input} />
          <TextInput placeholder="Enter Description" onChangeText={(text) => { this.setState({ Des: text }) }} style={styles.input} />
          <TouchableOpacity onPress={() => { this.addItem(); this.addNumber(); }} style={{ width: 100, height: 50, borderWidth: 5 }} >
            <Text>
              Add Item To Shop
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      alert("You have exeeded requests for today you greedy man")
    }
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: "coral",
    borderWidth: 5,
    width: 150,
    height: 40,
    marginTop: 10,
    borderColor: "blue",
  },
})