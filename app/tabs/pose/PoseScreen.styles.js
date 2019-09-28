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
  },
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
})
