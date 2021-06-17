//All that imports exports everything like that
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'

export default class Barters extends React.Component {

  constructor() {
    super();
    this.state = {
      ItemInfo: [],
    }
  }

  componentDidMount = () => {
    var items = []
    db.collection('barters').get().then((doc) => {
      doc.forEach((details) => {
        var document = details.data()
        items.push(document)
        this.setState({
          ItemInfo: items,
        })
      })
    })

  }

  render() {
    return (
      <FlatList data={this.state.ItemInfo} renderItem={({ item }) => {
        return (
          <View style={{ borderBottomWidth: 2, flexDirection: 'row', }} >
            <View>
              <Text>
                Item:{item.ItemName}
              </Text>
              <Text>
                Amount:{item.Amount},
              </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'red', width: 100, height: 50, }} onPress={
              () => { this.props.navigation.navigate("afterDetails", { "ADetails": item }) }
            }>
              <Text>
                Check
              </Text>
            </TouchableOpacity>
          </View>
        )
      }} >
      </FlatList>
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