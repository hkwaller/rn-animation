import React from 'react'
import { Text, SafeAreaView } from 'react-native'

const Screen = ({ children, color = 'transparent', style }) => (
  <SafeAreaView style={[{ flex: 1, padding: 20, backgroundColor: color }, style]}>
    {children}
  </SafeAreaView>
)

export default Screen
