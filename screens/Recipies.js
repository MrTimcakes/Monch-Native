import React, { useState, useEffect } from 'react'
import { 
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { withFirebaseHOC } from '../utilities/Firebase'

import { createStackNavigator } from '@react-navigation/stack';
import NewRecipePostScreen from './NewRecipePost';

function Recipe(){
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

function CategoryCard(){
  return(
    <View style={styles.categoryCard}>
      <Image style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>Italian</Text>
    </View>
  );
}

function RecipesScreen(props) {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar placeholder="Find Recipes" platform="ios" onChangeText={setSearch} value={search} containerStyle={{backgroundColor:'#fff'}}/>

        <View style={styles.recipesContainer}>
          <View style={styles.TitleContainer}>
            <TouchableOpacity><Text style={styles.title}>Trending Recipes</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.seeAll}>See all (45)</Text></TouchableOpacity>
          </View>
          <ScrollView style={styles.recipeScrollView} horizontal showsHorizontalScrollIndicator={false}>
            <Recipe />
            <Recipe />
            <Recipe />
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <View style={styles.TitleContainer}>
            <TouchableOpacity><Text style={styles.title}>Category</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.seeAll}>See all (15)</Text></TouchableOpacity>
          </View>
          <ScrollView style={styles.categoryScrollView} horizontal showsHorizontalScrollIndicator={false}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </ScrollView>
        </View>

        <View style={styles.recipesContainer}>
          <View style={styles.TitleContainer}>
            <TouchableOpacity><Text style={styles.title}>Your Favourites</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.seeAll}>See all (5)</Text></TouchableOpacity>
          </View>
          <ScrollView style={styles.recipeScrollView} horizontal showsHorizontalScrollIndicator={false}>
            <Recipe />
            <Recipe />
            <Recipe />
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blank: {},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  recipesContainer: {
    // flex: 0.8,
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
    // flex: 1,
    // backgroundColor: 'cyan',
  },
  recipe: {
    // flex: 1,
    margin: 15,
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
    marginBottom: 20,
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
    marginBottom: 5,
    color: '#3E3F68',
  },
  recipeDesc: {
    fontSize: 12,
    color: '#8A98BA',
  },
  categoryContainer: {

  },
  categoryScrollView: {
    flex: 1,
  },
  categoryCard: {
    backgroundColor: 'violet',
    // flex: 1,
    margin: 10,
    width: 100,
    height: 100,
    // backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {

  },
  categoryTitle: {
    fontSize: 26,
  },
})

// export default withFirebaseHOC(RecipesScreen)

const Stack = createStackNavigator();
function RecipeNavigator(P){
  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener for MultiFunction Button
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    P.navigation.navigate("New Recipe Post");
  }

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={withFirebaseHOC(RecipesScreen)} options={{ headerShown: false }} />
      <Stack.Screen name="New Recipe Post" component={NewRecipePostScreen} />
      <Stack.Screen name="Recipe Guide" component={NewRecipePostScreen} />
    </Stack.Navigator>
  );
}

export default withFirebaseHOC(RecipeNavigator)