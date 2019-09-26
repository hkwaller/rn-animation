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
        width: 50,
        height: 50,
        borderRadius: 50 / 2.0,
        borderWidth: 2,
        borderColor: 'gray',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Circle
