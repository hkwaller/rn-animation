import React, { useEffect, useState } from 'react'
import { Text, View, Animated, TouchableOpacity, Dimensions } from 'react-native'
import Screen from 'app/components/Screen'

const SCREEN_WIDTH = Dimensions.get('screen').width

const AnimatedScreen = ({ params }) => {
  const [isVisible, setVisible] = useState(false)
  const opacity = new Animated.Value(0)

  const translateX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [SCREEN_WIDTH, 10]
  })

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [isVisible])

  return (
    <Screen style={{ backgroundColor: 'darkslategray' }}>
      <TouchableOpacity
        style={{ padding: 40, backgroundColor: 'white' }}
        onPress={() => setVisible(!isVisible)}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <Animated.Text
        style={{
          transform: [{ translateX: translateX }],
          fontSize: 60
        }}>
        eentering
      </Animated.Text>
    </Screen>
  )
}

export default AnimatedScreen
