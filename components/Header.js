import React from 'react';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
export default class MyHeader extends React.Component {

    render() {
        return (
            <Header
                leftComponent={<Icon
                    name='bars'
                    type='font-awesome'
                    onPress={() => { this.props.navigation.toggleDrawer() }}
                />}
                centerComponent={{text : 'Buy'}}
    rightComponent = {
                < Icon
    name = 'bell'
    type = 'entypo'
    onPress = {()=>{ this.props.navigation.navigate('Notifications') }}
/>} 
    />
        )
    }


}