import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

import uuid from 'uuid';
import shrinkImageAsync from '../shrinkImageAsync';
import getUserInfo from '../getUserInfo';

// Initialize Firebase if not already
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Firebase = {
  ...firebase, // Expose all existing firebase functions
  // Auth Utilities
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },
  passwordReset: email => {
    return firebase.auth().sendPasswordResetEmail(email)
  },
  // Firestore Utilities
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  },
  // Helpers
  get collection() {
    return firebase.firestore().collection(collectionName);
  },
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  },
  get timestamp() {
    return Date.now();
  },
  // uploadPhoto: (uri, uploadUri) => {
  uploadPhoto(uri, uploadUri){
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const ref = firebase.storage().ref(uploadUri);
      const unsubscribe = ref.put(blob).on(
        'state_changed',
        state => {},
        err => {
          unsubscribe();
          rej(err);
        },
        async () => {
          unsubscribe();
          const url = await ref.getDownloadURL();
          res(url);
        },
      );
    });
  },
  async uploadPhotoAsync(uri, collectionName, imgName = uuid.v4()) {
    const path = `${collectionName}/${this.uid}/${imgName}.jpg`;
    return this.uploadPhoto(uri, path);
  },
  async post({ desc, image: localUri }) {
    try {
      const { uri: reducedImage, width, height } = await shrinkImageAsync( localUri, );
      const postID = uuid.v4();
      const remoteUri = await this.uploadPhotoAsync(reducedImage, 'userPosts', postID);
      firebase.firestore().collection('users').doc(this.uid).collection('posts').doc(postID).set({
        description: desc,
        authorUid: this.uid,
        postId: postID,
        timestamp: this.timestamp,
        imageWidth: width,
        imageHeight: height,
        image: remoteUri,
        user: getUserInfo(),
        likes: 0,
      });
    } catch ({ message }) {
      alert(message);
    }
  },
}

export default Firebase
