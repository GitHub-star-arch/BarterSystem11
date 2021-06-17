import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import { DrawerComponent } from './components/DrawerComponent'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  Drawer: DrawerComponent
})
const AppContainer = createAppContainer(switchNavigator)

// function stopCodeImplode(noboom) {
//     this.noboom = this.code.code();
// }
// function saveCode(antivirus) {
//     this.protectionSequence = {
//         this.anti-virus = kill virus.anti();
//         this.sheild = protect saveCode.destroy();
//         this.requestAssistance = call help.(
//             if (this.sheild.fail()) {
//                 call 911/100
//             }
//         )
//         this.replace = this.code.code();
//     }
//     stopCodeImplode();
// }
