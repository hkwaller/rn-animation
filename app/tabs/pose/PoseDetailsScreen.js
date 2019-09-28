import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Screen from 'app/components/Screen'
import background from 'app/assets/background.png'

const PoseDetailsScreen = props => {
  const { name, color } = props.navigation.state.params

  return (
    <Screen color={color}>
      <Text>{name}</Text>
    </Screen>
  )
}

export default PoseDetailsScreen
