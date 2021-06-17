//All that imports exports everything like that
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Dimensions } from 'react-native';

export default class SwipeableFlatlist extends React.Component {

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

    renderItem = (data) => {
        <View>
            <Text>
                {data.item.Donor} is interested in changing wares.
            </Text>
        </View>
    }

    markHasRead=(data)=>{
        db.collection('notifications').doc(data.doc_id).update({
            NotificationStatus: "Readzx`"
        })
    }

    swipeValueChange = (swipedata) => {
        const { key, value } = swipedata
        if (value < -Dimensions.get('window').width) {
            const newData = [...this.state.ItemInfo]
            const preIndex = this.state.ItemInfo.findIndex(item => { item.key === key })
            this.markHasRead(this.state.ItemInfo[preIndex])
            newData.splice(preIndex, 1)
            this.setState({
                ItemInfo: newData,
            })
        }
    }

    render() {
        return (
            <SwipeListView
                disableRightSwipe
                data={this.state.ItemInfo}
                renderItem={this.renderItem}
                renderHiddenItem={() => (<Text style={{ backgroundColor: "red", alignItems: 'center' }}> Clear </Text>)}
                onSwipeValueChange={this.swipeValueChange}
            />
        )
    }

}