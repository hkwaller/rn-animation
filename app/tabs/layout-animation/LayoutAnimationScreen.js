import React, { Component, useState } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  SafeAreaView
} from 'react-native'
import Circle from './Circle'
import { CustomLayoutAnimation } from './config'

const DEFAULT_SIZE = 80

function LayoutAnimationScreen() {
  const initialCircles = [{ index: 0, text: '0', size: DEFAULT_SIZE }]

  const [circles, setCircles] = useState(initialCircles)

  function remove(index) {
    LayoutAnimation.configureNext(CustomLayoutAnimation)
    const newCircles = circles.filter(c => c.index !== index)
    setCircles(newCircles)
  }

  function add() {
    LayoutAnimation.configureNext(CustomLayoutAnimation)

    if (circles.length === 0) return setCircles([{ index: 0, text: '0', size: DEFAULT_SIZE }])

    const newIndex = Math.max.apply(Math, circles.map(c => c.index)) + 1
    return setCircles([...circles, { index: newIndex, text: newIndex, size: DEFAULT_SIZE }])
  }

  function update(index) {
    LayoutAnimation.configureNext(CustomLayoutAnimation)

    circles[index].size = circles[index].size === DEFAULT_SIZE ? 150 : 80

    setCircles([...circles])
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => add()}>
        <Text style={styles.text}>Legg til sirkel</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {circles.map(c => (
          <Circle
            key={c.index}
            text={c.text}
            size={c.size}
            onPress={() => remove(c.index)}
            onLongPress={() => update(c.index)}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
    padding: 100,
    backgroundColor: 'mediumvioletred'
  },
  button: {
    borderColor: 'lightgreen',
    borderBottomWidth: 2,
    padding: 10,
    marginVertical: 50
  },
  text: {
    fontWeight: '700',
    fontSize: 16
  }
})

export default LayoutAnimationScreen
