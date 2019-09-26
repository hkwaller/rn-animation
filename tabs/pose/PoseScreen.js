import React, { Component, useState, useCallback } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  SafeAreaView,
  ImageBackground,
  StatusBar
} from 'react-native'
import background from '../../assets/background.png'
import {
  Header,
  Score,
  Label,
  CardHeader,
  CardTag
} from '../../components/texts'

function PoseScreen() {
  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}>David Courtney</Header>
        <View style={styles.rowOfScores}>
          <View>
            <Label>Level</Label>
            <Score>06</Score>
          </View>
          <View>
            <Label>Points</Label>
            <Score>6371</Score>
          </View>
          <View>
            <Label>Rank</Label>
            <Score>720</Score>
          </View>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            <CardTag>New</CardTag>
            <View style={styles.tagLine('black')} />
            <CardHeader>Quick Play</CardHeader>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: 'flex-start',
    padding: 40,
    padding: 100
  },
  header: {
    marginTop: 100,
    width: '50%'
  },
  rowOfScores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 40
  },
  card: {
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  tagLine: color => ({
    height: 2,
    width: '40%',
    marginVertical: 5,
    backgroundColor: color
  })
})

export default PoseScreen
