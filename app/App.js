import React from 'react'
import { Text, View, Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

import LayoutAnimationScreen from 'app/tabs/layout-animation/LayoutAnimationScreen'
import PoseScreen from 'app/tabs/pose/PoseScreen'
import AnimatableScreen from 'app/tabs/animatable/AnimatableScreen'
import PoseDetailsScreen from 'app/tabs/pose/PoseDetailsScreen'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

const PoseNavigator = createStackNavigator(
  {
    Pose: PoseScreen,
    PoseDetails: PoseDetailsScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Pose: PoseNavigator,
    LayoutAnimation: LayoutAnimationScreen,
    Animatable: AnimatableScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Animatable') {
          iconName = `eraser`
        } else if (routeName === 'Settings') {
          iconName = `wheelchair-alt`
        } else if (routeName === 'Pose') {
          iconName = `smile-o`
        } else {
          iconName = `hand-lizard-o`
        }

        return <Icon name={iconName} size={25} color={tintColor} />
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state

        let label = ''

        if (routeName === 'Animatable') label = 'Animatable'
        else if (routeName === 'LayoutAnimation') label = 'LA'
        else if (routeName === 'Pose') label = 'Pose'
        else if (routeName === 'Settings') label = 'Settings'

        return <Text style={{ fontSize: 16, fontWeight: '800', color: tintColor }}>{label}</Text>
      }
    }),
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        borderTopColor: 'transparent'
      },
      activeTintColor: 'white',
      inactiveTintColor: 'black'
    }
  }
)

export default createAppContainer(TabNavigator)
