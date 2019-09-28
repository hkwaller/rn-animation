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
import background from 'app/assets/background.png'
import { Header, Score, Label, CardHeader, CardTag } from 'app/components/texts'
import Screen from 'app/components/Screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './PoseScreen.styles'

const cards = [
  { header: 'Quick Play', tag: 'new', icon: 'angellist', color: 'darkorange' },
  { header: 'Season 3', tag: 'new', icon: 'compass', color: 'darkcyan' },
  { header: 'Quick Play', tag: 'january', icon: 'bath', color: 'chocolate' },
  { header: 'Events', tag: 'new', icon: 'deafness', color: 'mediumblue' }
]
function Card(props) {
  const { tag, header, icon, color, navigation } = props
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => {
        navigation.push('PostDetails', { ...props })
      }}>
      <CardTag>{tag}</CardTag>
      <View style={styles.tagLine(color)} />
      <CardHeader style={{ marginTop: 10 }}>{header}</CardHeader>
      <Icon name={icon} size={70} color={color} style={styles.cardIcon} />
    </TouchableOpacity>
  )
}

function PoseScreen({ navigation }) {
  return (
    <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
      <StatusBar barStyle="light-content" />
      <Screen style={styles.container}>
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
          <Card {...cards[0]} navigation={navigation} />
          <Card {...cards[1]} navigation={navigation} />
          <Card {...cards[2]} navigation={navigation} />
          <Card {...cards[3]} navigation={navigation} />
        </ScrollView>
      </Screen>
    </ImageBackground>
  )
}

export default PoseScreen
