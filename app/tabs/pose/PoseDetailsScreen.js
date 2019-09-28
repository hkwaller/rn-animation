import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Screen from 'app/components/Screen'
import { DetailsHeader } from 'app/components/texts'
import background from 'app/assets/background.png'
import Card from 'app/components/Card'

const PoseDetailsScreen = props => {
  const { header, color } = props.navigation.state.params

  return (
    <Screen color={color}>
      <View style={{ padding: 20 }}>
        <DetailsHeader>{header}</DetailsHeader>
        <Card {...props.navigation.state.params} />
      </View>
    </Screen>
  )
}

export default PoseDetailsScreen
