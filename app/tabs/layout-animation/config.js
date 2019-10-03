import { LayoutAnimation } from 'react-native'

export const CustomLayoutAnimation = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleY
  },
  update: {
    type: LayoutAnimation.Types.curveEaseInEaseOut,
    property: LayoutAnimation.Properties.scaleXY
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleY
  }
}
