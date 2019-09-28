import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CardTag, CardHeader } from 'app/components/texts'

function Card(props) {
  const { tag, header, icon, color, navigation } = props
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => {
        navigation.push('PoseDetails', { ...props })
      }}>
      <CardTag>{tag}</CardTag>
      <View style={styles.tagLine(color)} />
      <CardHeader style={{ marginTop: 10 }}>{header}</CardHeader>
      <Icon name={icon} size={70} color={color} style={styles.cardIcon} />
    </TouchableOpacity>
  )
}

const styles = {
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
}

export default Card
