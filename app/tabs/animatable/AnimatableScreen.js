import React, { useRef } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Screen from 'app/components/Screen'

const AnimatableScreen = ({ params }) => {
  const animationRef = useRef(null)

  return (
    <Screen color="maroon" style={styles.screen}>
      <Animatable.Text
        useNativeriver
        animation="slideInDown"
        iterationCount="infinite"
        direction="alternate">
        Up and down you go
      </Animatable.Text>
      <Animatable.Text
        animation="jello"
        easing="ease-out"
        iterationCount="infinite"
        style={{ textAlign: 'center', fontSize: 60 }}>
        ❤️
      </Animatable.Text>
      <TouchableWithoutFeedback onPress={() => animationRef.current.bounceOut()}>
        <Animatable.Text style={styles.fadingText} ref={animationRef}>
          Fade me!
        </Animatable.Text>
      </TouchableWithoutFeedback>
    </Screen>
  )
}

const styles = {
  screen: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadingText: {
    fontSize: 50,
    color: 'white'
  }
}

export default AnimatableScreen
