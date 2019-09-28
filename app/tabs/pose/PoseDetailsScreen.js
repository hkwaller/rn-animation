import React, { useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import posed from 'react-native-pose'

import Screen from 'app/components/Screen'
import { DetailsHeader } from 'app/components/texts'
import background from 'app/assets/background.png'
import Card from 'app/components/Card'

const Box = posed.View({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { type: 'spring', stiffness: 90 }
  },
  hidden: {
    scaleY: 0,
    opacity: 0
  }
})

const Overlay = posed.View({
  open: {
    y: 0,
    delayChildren: 200,
    staggerChildren: 100
  },
  closed: { y: '100vh', delay: 300 }
})

const Item = posed.View({
  open: { x: 0, opacity: 1 },
  closed: { x: 100, opacity: 0 }
})

const PoseDetailsScreen = props => {
  const [isVisible, setVisible] = useState(false)
  const { header, color } = props.navigation.state.params

  return (
    <Screen color={color}>
      <View style={{ padding: 20 }}>
        <DetailsHeader>{header}</DetailsHeader>
        <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10, marginTop: 20 }}>
          <Text>sup</Text>
          <TouchableOpacity onPress={() => setVisible(!isVisible)}>
            <Text>toggle</Text>
          </TouchableOpacity>
          <Box
            style={{ padding: 50, backgroundColor: 'red' }}
            pose={isVisible ? 'visible' : 'hidden'}
          />
          <Overlay pose={isVisible ? 'open' : 'closed'}>
            <Item>
              <Card {...props.navigation.state.params} />
            </Item>
            <Item>
              <Card {...props.navigation.state.params} />
            </Item>
          </Overlay>
        </View>
      </View>
    </Screen>
  )
}

export default PoseDetailsScreen
