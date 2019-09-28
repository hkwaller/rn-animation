import React from 'react'
import { TouchableOpacity, LayoutAnimation, Text } from 'react-native'
import { CustomLayoutAnimation } from './config'

function Circle(props) {
  LayoutAnimation.configureNext(CustomLayoutAnimation)

  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={{
        width: 80,
        height: 80,
        borderRadius: 80 / 2.0,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ fontSize: 20 }}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Circle
