import { LayoutAnimation } from 'react-native'

export const CustomLayoutAnimation = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleX
  },
  update: {
    type: LayoutAnimation.Types.curveEaseInEaseOut
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleXY
  }
}
