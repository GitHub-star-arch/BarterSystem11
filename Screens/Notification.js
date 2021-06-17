//All that imports exports everything like that
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'

export default class Notifications extends React.Component {

  constructor() {
    super();
    this.state = {
      ItemInfo: [],
    }
  }

  componentDidMount = () => {
    var items = []
    db.collection('notifications').get().then((doc) => {
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
        if (item.NotificationStatus === 'Unread') {
          return (
            <View style={{ borderBottomWidth: 2, flexDirection: 'row', }} >
              <View>
                <Text>
                  {item.Donor} is interested in exchanging the item with you.
                </Text>
              </View>
            </View>
          )
        }
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