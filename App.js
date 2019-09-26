import React from 'react'
import { Text, View, Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LayoutAnimationScreen from './tabs/layout-animation/LayoutAnimationScreen'
import PoseScreen from './tabs/pose/PoseScreen'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Pose: PoseScreen,
  LayoutAnimation: LayoutAnimationScreen,
  Home: HomeScreen,
  Settings: SettingsScreen
})

export default createAppContainer(TabNavigator)
