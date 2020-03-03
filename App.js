import './utilities/bodges';
import React from 'react'
import AppContainer from './navigation'
import Firebase, { FirebaseProvider } from './utilities/Firebase'

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <AppContainer />
    </FirebaseProvider>
  )
}
