import React, { useRef, useState, useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native'
import Screen from 'app/components/Screen'
import { Bold, Small } from 'app/components/texts'
import Icon from 'react-native-vector-icons/FontAwesome'

const orange = '#FEB027'

const items = [
  { text: 'Download', icon: 'cloud-download', color: orange },
  { text: 'Images', icon: 'soccer-ball-o', color: 'black' },
  { text: 'Music', icon: 'music', color: 'black' },
  { text: 'Cloud', icon: 'mixcloud', color: 'black' },
  { text: 'Documents', icon: 'blind', color: orange },
  { text: 'Images XL', icon: 'flask', color: 'black' }
]

const AnimatedScreen = ({ params }) => {
  const [isVisible, setVisible] = useState(true)
  const opacity = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isVisible ? 0 : 1,
      duration: 500
    }).start()
  }, [isVisible])

  return (
    <Screen color="#fED32C" style={styles.screen}>
      <View style={styles.topIcons}>
        <Icon name="paper-plane-o" size={20} color="black" />
        <Icon name="search" size={20} color="black" />
        <Icon name="eye" size={20} color="black" />
      </View>
      <TouchableOpacity style={{ marginTop: 40 }} onPress={() => setVisible(!isVisible)}>
        <Bold>Toggle</Bold>
      </TouchableOpacity>
      <Animated.View style={[styles.storageContainer, { opacity: opacity }]}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.storage}>
            <Text style={{ fontWeight: '900' }}>85%</Text>
          </View>
          <View style={{ marginLeft: 40 }}>
            <Bold>Internal</Bold>
            <Text>Storage</Text>
            <Small style={{ color: 'grey' }}>24.2gb / 28.5gb</Small>
          </View>
        </View>
      </Animated.View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {items.map(item => (
          <View key={item.text} style={{ alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity style={[styles.item, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={20} color="white" />
            </TouchableOpacity>
            <Small>{item.text}</Small>
          </View>
        ))}
      </ScrollView>
    </Screen>
  )
}

const styles = {
  screen: {
    alignItems: 'center'
  },
  button: {
    marginVertical: 20
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 40
  },
  fadingText: {
    fontSize: 50,
    color: 'white'
  },
  topIcons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20
  },
  item: {
    height: 100,
    width: 100,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  storageContainer: {
    backgroundColor: 'white',
    marginTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  storage: {
    borderWidth: 2,
    borderColor: '#fED32C',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default AnimatedScreen
