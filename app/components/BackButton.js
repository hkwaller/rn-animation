import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack(null)}>
    <Icon name="angle-left" size={40} color="white" style={{ marginBottom: 10 }} />
  </TouchableOpacity>
)

export default BackButton
