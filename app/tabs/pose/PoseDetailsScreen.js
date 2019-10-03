import React, { useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Button, ScrollView } from 'react-native'
import posed from 'react-native-pose'
import Screen from 'app/components/Screen'
import { DetailsHeader } from 'app/components/texts'
import background from 'app/assets/background.png'
import Card from 'app/components/Card'
import BackButton from 'app/components/BackButton'
import Icon from 'react-native-vector-icons/FontAwesome'

const Box = posed.View({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { type: 'spring', stiffness: 90 }
  },
  hidden: {
    scaleY: 0,
    opacity: 0
  }
})

const Overlay = posed.View({
  open: {
    y: 0,
    delayChildren: 200,
    staggerChildren: 100
  },
  closed: { y: 100, delay: 300 }
})

const Item = posed.View({
  open: { x: 0, opacity: 1 },
  closed: { x: 100, opacity: 0 }
})

const PoseDetailsScreen = props => {
  const [isVisible, setVisible] = useState(false)
  const { header, color } = props.navigation.state.params

  return (
    <Screen color={color}>
      <View style={{ padding: 20 }}>
        <BackButton navigation={props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <DetailsHeader style={{ marginBottom: 50 }}>{header}</DetailsHeader>
          <View style={styles.roundButton}>
            <Icon name="paper-plane-o" size={30} color="white" />
          </View>
          <TouchableOpacity onPress={() => setVisible(!isVisible)}>
            <Text>toggle</Text>
          </TouchableOpacity>
          <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
          <Overlay
            style={{ flexDirection: 'row', flexWrap: 'wrap' }}
            pose={isVisible ? 'open' : 'closed'}
            style={{ marginBottom: 100 }}>
            <Item>
              <Card {...props.navigation.state.params} />
            </Item>
            <Item>
              <Card {...props.navigation.state.params} />
            </Item>
          </Overlay>
        </ScrollView>
      </View>
    </Screen>
  )
}

const styles = {
  scrollView: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 40
  },
  roundButton: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: { padding: 50, backgroundColor: 'red' }
}

export default PoseDetailsScreen
