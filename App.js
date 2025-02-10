import {Image, StyleSheet,SafeAreaView ,Platform ,ScrollView} from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {

  const CharmanderData = {
    name:"Charmander",
    image: require("./assets/charmander.png"),
    type:"Fire",
    hp:"39",
    moves: ["Scratch","Ember","Growl","Leer"],
    weaknesses: ["Water","Rock"],
  };
  const squirtleData = {
    name:"Squirtle",
    image: require("./assets/squirtle.png"),
    type:"Water",
    hp:"44",
    moves: ["Tackle","Water","Gun","Tail Whip" ,"Withdraw"],
    weaknesses: ["Electric","Grass"],
  };

  const bulbasaurData = {
    name:"Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type:"Grass",
    hp:"45",
    moves: ["Tackle","Growl","Leech Seed","Vine Whip"],
    weaknesses: ["Fire","Flying","Ice","Psychic"],
  };

  const pikachuData = {
    name:"Pikachu",
    image: require("./assets/pikachu.png"),
    type:"Electric",
    hp:"35",
    moves: ["Quick Attack","Thunder Shock","Growl","Tail Whip"],
    weaknesses: ["Ground"],
  };
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <PokemonCard {...CharmanderData}/>
    <PokemonCard {...squirtleData}/>
    <PokemonCard {...bulbasaurData}/>
    <PokemonCard {...pikachuData}/>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});