import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginBottom: 0,
    justifyContent: 'flex-start',
    paddingBottom: 90
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
  }
})
