import React, {useEffect, useState} from 'react'
import {
  View,
  RefreshControl,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import NewProfilePostScreen from 'Monch/screens/NewProfilePost';
import PostListScreen from 'Monch/screens/PostList';

import ProfileHead from '../components/ProfileHead';
import PhotoGrid from '../components/PhotoGrid';

import { withFirebaseHOC } from '../utilities/Firebase'

function ProfileScreen(P) {
  const profileID = P.route.params?.profileID ?? P.firebase.auth().currentUser.uid;
  const [refreshing, setRefreshing] = useState(true);
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // P.navigation.setOptions({ title: 'MrTimcakes' })
    fetchProfile();
    fetchPosts();
  }, []);

  const fetchProfile = (uid = profileID) =>{
    P.firebase.firestore().collection("users").doc(uid).get().then(function(doc) {
      if (doc.exists) {
        P.navigation.setOptions({ title: doc.data().username })
        setProfile(doc.data());
      } else {
          // doc.data() will be undefined in this case
          alert("User does not exist!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  const fetchPosts = (uid = profileID) => {
    P.firebase.firestore().collection("users").doc(uid).collection("posts").get().then(function(querySnapshot) {
      let allPosts = [];
      querySnapshot.forEach(function(doc) {
        allPosts = [...allPosts, doc.data()];
        // console.log(doc.id, " => ", doc.data());
      });
      // console.log(JSON.stringify(allPosts))
      setPosts(allPosts);
      setRefreshing(false);
    });
  }

  return (
    <View>
      {/* <ProfileHead /> */}
      <PhotoGrid 
        data={posts}
        ListHeaderComponent={ProfileHead}
        ListFooterComponent={<View></View>}
        ListFooterComponentStyle={{height: 80}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchPosts} />
        }  
      />
    </View>
  );
}


const Stack = createStackNavigator();
function ProfileNavigator(P){
  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener for MultiFunction Button
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    P.navigation.navigate("New Post");
  }

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={withFirebaseHOC(ProfileScreen)} options={{ headerShown: true }} />
      <Stack.Screen name="New Post" component={withFirebaseHOC(NewProfilePostScreen)} />
      <Stack.Screen name="Post List" component={withFirebaseHOC(PostListScreen)} />
    </Stack.Navigator>
  );
}

export default withFirebaseHOC(ProfileNavigator)