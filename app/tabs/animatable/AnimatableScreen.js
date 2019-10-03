import React, { useRef, useState } from 'react'
import { Text, View, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
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

const AnimatableSmallText = Animatable.createAnimatableComponent(Small)
const AnimatableBoldText = Animatable.createAnimatableComponent(Bold)

const AnimatableScreen = ({ params }) => {
  const animationRef = useRef(null)
  const [isVisible, setVisible] = useState(true)

  return (
    <Screen color="#fED32C" style={styles.screen}>
      <View style={styles.topIcons}>
        <Icon name="paper-plane-o" size={20} color="black" />
        <Icon name="search" size={20} color="black" />
        <Icon name="eye" size={20} color="black" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVisible(!isVisible)
          isVisible ? animationRef.current.bounceOut() : animationRef.current.bounceIn()
        }}>
        <Text>Toggle storage container</Text>
      </TouchableOpacity>
      <Animatable.View style={styles.storageContainer} ref={animationRef}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.storage}>
            <Text style={{ fontWeight: '900' }}>85%</Text>
          </View>
          <View style={{ marginLeft: 40 }}>
            <AnimatableSmallText
              useNativeDriver
              animation="slideInDown"
              iterationCount={1}
              direction="alternate">
              Up and down you go
            </AnimatableSmallText>
            <AnimatableBoldText animation="lightSpeedIn" iterationCount={1} direction="alternate">
              Internal
            </AnimatableBoldText>
            <Text>Storage</Text>
            <Small style={{ color: 'grey' }}>24.2gb / 28.5gb</Small>
          </View>
        </View>
      </Animatable.View>
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

export default AnimatableScreen
