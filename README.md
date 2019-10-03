# Animasjon 🕺🏻


## Animated

Innebygget animasjons-API som er ganske så kraftfult. I sin enkleste form knytter man opp en `Animated.Value()` til en stil på en komponent som kan startes og stoppes:

```js
Animated.timing(
  opacityAnim,
  {
    toValue: 1,
  },
).start();

<Animated.View style={{opacity: opacityAnim}} />
```

Vi må wrappe opp komponenter i `Animated.` for å fortelle RN at den skal animeres.

Mer å lese [her](https://facebook.github.io/react-native/docs/animated) og [her](https://facebook.github.io/react-native/docs/animations#animated-api)

## LayoutAnimation

Også innebygget i React Native. Også kraftfullt men også ganske så magisk. Den animerer en komponents position til neste layoutendring.

```js
const Component = () => {
  const [isExpanded, setExpanded] = useState(false)
  
  return (
    <View style={{overflow: 'hidden'}}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!isExpanded);
        }}>
        <Text>
          Trykk her for å {isExpanded ? 'minimere' : 'ekspandere'}!
        </Text>
      </TouchableOpacity>
      {isExpanded && <Text>Iblant blir jeg borte</Text>}
    </View>
  )
}

```

Vi trenger kun å si fra at vi skal endre _noe_ på layout så tar den seg av resten. 

Kan lese mere [her](https://facebook.github.io/react-native/docs/layoutanimation)

## Animatable

Skrevet av Joel Arvidsson, bedre kjent som Oblador, som gjort en veldig masse for RN communityn. Et bibliotek for deklarative animasjoner.

Kan animere en tekst så enkelt som 

```js
<Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Jeg flyr opp og ned</Animatable.Text>
```

Dokumentasjon [her](https://github.com/oblador/react-native-animatable)


## Pose

Pose er forgjengeren til Framer Motion, der den nyere versjonen dessverre ikke finnes for RN enda. Uansett så er det fortsatt et superfint bibliotek for animasjon!

Å animere noe er ganske rett frem:

```js

// Definerer en komponent som skal animeres, hvilke verdier og hvordan 
// transisjonen skal være. Dette wrappes i posed

const Box = posed.View({
  visible: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 90 }
  },
  hidden: {
    opacity: 0
  }
})

const Component = () => {
  const [isVisible, setVisible] = useState(false)
  
  return (
    <View>
      <TouchableOpacity onPress = {() => setVisible(!isVisible)}>
        <Text>Toggle</Text>
      </TouchableOpacity >
      <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
    </View>
  )
}
  
``` 

