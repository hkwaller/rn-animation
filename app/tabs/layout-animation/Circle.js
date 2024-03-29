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
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2.0,
        backgroundColor: props.color,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ fontSize: 20 }}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Circle
