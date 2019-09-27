import React, { Component, useState, useCallback } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  ImageBackground,
  StatusBar,
  ScrollView
} from 'react-native'
import background from '../../assets/background.png'
import {
  Header,
  Score,
  Label,
  CardHeader,
  CardTag
} from '../../components/texts'
import Icon from 'react-native-vector-icons/Ionicons'

function PoseScreen() {
  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
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
        <ScrollView contentContainerStyle={styles.cards}>
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <CardTag>New</CardTag>
            <View style={styles.tagLine('#E99B5C')} />
            <CardHeader style={{ marginTop: 10 }}>Quick Play</CardHeader>
            <Icon
              name="md-stopwatch"
              size={70}
              color="#E99B5C"
              style={styles.cardIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <CardTag>New</CardTag>
            <View style={styles.tagLine('#5BC9DE')} />
            <CardHeader style={{ marginTop: 10 }}>Event</CardHeader>
            <Icon
              name="md-git-commit"
              size={70}
              color="#5BC9DE"
              style={styles.cardIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <CardTag>New</CardTag>
            <View style={styles.tagLine('#AF7D94')} />
            <CardHeader style={{ marginTop: 10 }}>Season 3</CardHeader>
            <Icon
              name="md-gift"
              size={70}
              color="#AF7D94"
              style={styles.cardIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <CardTag>New</CardTag>
            <View style={styles.tagLine('#AF7D94')} />
            <CardHeader style={{ marginTop: 10 }}>Play</CardHeader>
            <Icon
              name="md-tablet-portrait"
              size={70}
              color="#AF7D94"
              style={styles.cardIcon}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginBottom: 0,
    justifyContent: 'flex-start'
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
    marginTop: 40
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight: 20,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white'
  },
  cardIcon: {
    marginTop: 20,
    minWidth: 120
  },
  tagLine: color => ({
    height: 4,
    width: '40%',
    marginVertical: 5,
    backgroundColor: color
  })
})

export default PoseScreen
