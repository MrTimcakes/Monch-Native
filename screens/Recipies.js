import React, {useState} from 'react'
import { 
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { 
  SearchBar,
} from 'react-native-elements';
import { withFirebaseHOC } from '../utilities/Firebase'

function Recipie(){
  return(
    <TouchableOpacity style={styles.recipe}>
      <Image style={styles.headerImage} source={require('../assets/temporary/Burger.jpg')} />
      <View style={styles.recipeLower}>
        <Text style={styles.recipeTitle}>Cheese Burger</Text>
        <Text style={styles.recipeDesc}>The Classic All-American Cheese Burger</Text>
      </View>
    </TouchableOpacity>
  );
}

function RecipiesScreen(props) {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Find Recipies" platform="ios" onChangeText={setSearch} value={search} containerStyle={{backgroundColor:'#fff'}}/>

      <View style={styles.recipesContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.title}>Trending Recipies</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all (45)</Text></TouchableOpacity>
        </View>
        <ScrollView style={styles.recipeScrollView} horizontal showsHorizontalScrollIndicator={false}>
          <Recipie />
          <Recipie />
        </ScrollView>
      </View>

      <View>
        <View style={styles.TitleContainer}>
          <Text style={styles.title}>Category</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all (15)</Text></TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <Image />
            <Text>Italian</Text>
          </View>
        </ScrollView>
      </View>

      <Text>Monch Recipies!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  recipesContainer: {
    flex: 0.6,
    // backgroundColor: 'yellow',
    // height: 350,
  },
  TitleContainer:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    marginLeft: 15,
    fontSize: 28,
    color: '#222455'
  },
  seeAll:{
    marginRight: 15,
    fontSize: 16,
  },
  recipeScrollView: {
    flex: 1,
    // backgroundColor: 'cyan',
  },
  recipe: {
    // flex: 1,
    margin: 10,
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.6,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  headerImage: {
    flex: 0.65,
    width: undefined, 
    height: undefined,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recipeLower: {
    flex: 0.35,
    justifyContent: 'center',
    marginLeft: 10,
  },
  recipeTitle: {
    fontSize: 22,
    marginBottom: 5
  },
  recipeDesc: {
    fontSize: 12,
  },
})

export default withFirebaseHOC(RecipiesScreen)