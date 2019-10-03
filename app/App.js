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
import AnimatedScreen from 'app/tabs/animated/AnimatedScreen'

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
    Animated: AnimatedScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Animatable') {
          iconName = `eraser`
        } else if (routeName === 'Animated') {
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
        else if (routeName === 'Animated') label = 'Animated'

        return <Text style={{ fontSize: 14, fontWeight: '800', color: tintColor }}>{label}</Text>
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
      style: {
        paddingTop: 8,
        borderTopWidth: 1
      }
    }
  }
)

export default createAppContainer(TabNavigator)
