import React , {useState} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'



const App = () => {
  
  const [uri, setUri] = useState(DiceOne);
  const [ur, setUr] = useState(DiceOne);

  const playButtonTapped = () => {
    let randomNumDiceOne = Math.floor(Math.random() * 6) + 1;
    


    switch (randomNumDiceOne) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
    
      default:
        setUri(DiceOne);
        break;
    }

    let randomNumDiceTwo = Math.floor(Math.random() * 6) + 1;
    switch (randomNumDiceTwo) {
      case 1:
        setUr(DiceOne);
        break;
      case 2:
        setUr(DiceTwo);
        break;
      case 3:
        setUr(DiceThree);
        break;
      case 4:
        setUr(DiceFour);
        break;
      case 5:
        setUr(DiceFive);
        break;
      case 6:
        setUr(DiceSix);
        break;
    
      default:
        setUr(DiceOne);
        break;
    }
  }



  return(
    <>
      <View style={styles.container}>
      <Pressable onPress={playButtonTapped}>
        <Image style={styles.image} source={ur}/>
        <Image style={styles.image} source={uri}/>
      </Pressable>
      </View>

    </>
  );
};



export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width:200,
    height:200,

  },

  playBtn:{
    fontSize: 20,
    marginTop:30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderWidth: 3,
    borderRadius: 5,
    fontWeight: "bold",

  }

});