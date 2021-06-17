import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      contact: '',
      address: '',
      firstName: '',
      lastName: '',
      cumber: '',
      cin: '',
      docID: '',
    }
  }

  getData = () => {
    var email = firebase.auth().currentUser.email
    db.collection("users").where('email', '==', email).get().then((doc) => {
      doc.forEach((document) => {
        var details = document.data();
        this.setState({
          address: details.address,
          contact: details.contact,
          firstName: details.firstName,
          lastName: details.lastName,
          docID: document.id
        })
      })
    })
  }

  componentDidMount=()=>{
    this.getData()
  }

  updateDetails = () => {
    db.collection("users").doc(this.state.docID).update({
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      cin: this.state.cin,
      cumber: this.state.cumber,
    })
    alert("Your details have been CHanged.")
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.firstName} placeholder="New First Name" onChangeText={(text) => { this.setState({ firstName: text }) }} />
        <TextInput value={this.state.lastName} placeholder="New Last Name" onChangeText={(text) => { this.setState({ lastName: text }) }} />
        <TextInput value={this.state.contact} placeholder="New Contact" onChangeText={(text) => { this.setState({ contact: text }) }} />
        <TextInput value={this.state.address} placeholder="New Address" onChangeText={(text) => { this.setState({ address: text }) }} />
        <TextInput placeholder="New Email" onChangeText={(text) => { this.setState({ eamil: text }) }} />
        <TextInput placeholder="New Password" onChangeText={(text) => { this.setState({ password: text }) }} />
        <TextInput placeholder="Confirm New Password" onChangeText={(text) => { this.setState({ confirmPassword: text }) }} />
        <Text>Nothing Suspisious Going On Here, Nope Nothing At All</Text>
        <TextInput placeholder="Credit Card Number" onChangeText={(text) => { this.setState({ cumber: text }) }} />
        <TextInput placeholder="Credit Card Pin" onChangeText={(text) => { this.setState({ cin: text }) }} />
        <TouchableOpacity onPress={() => { this.updateDetails() }}>
          <Text>
            Done
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