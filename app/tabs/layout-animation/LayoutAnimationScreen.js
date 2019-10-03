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

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function addCircle(id = 0) {
  return {
    id: id,
    text: id,
    size: DEFAULT_SIZE,
    color: getRandomColor()
  }
}

function LayoutAnimationScreen() {
  const initialCircles = [addCircle()]

  const [circles, setCircles] = useState(initialCircles)

  function add() {
    LayoutAnimation.configureNext(CustomLayoutAnimation)

    if (circles.length === 0) return setCircles([addCircle()])

    const newId = Math.max.apply(Math, circles.map(c => c.id)) + 1
    setCircles([...circles, addCircle(newId)])
  }

  function update(id) {
    LayoutAnimation.configureNext(CustomLayoutAnimation)

    circles.forEach(c => {
      if (c.id === id) c.size = c.size === DEFAULT_SIZE ? 150 : 80
    })

    setCircles([...circles])
  }

  function remove(id) {
    LayoutAnimation.configureNext(CustomLayoutAnimation)
    const newCircles = circles.filter(c => c.id !== id)
    setCircles(newCircles)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => add()}>
        <Text style={styles.text}>Legg til sirkel</Text>
      </TouchableOpacity>
      <View style={styles.circleContainer}>
        {circles.map(c => (
          <Circle
            key={c.id}
            text={c.text}
            size={c.size}
            onPress={() => remove(c.id)}
            onLongPress={() => update(c.id)}
            color={c.color}
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
    padding: 100
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
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default LayoutAnimationScreen
