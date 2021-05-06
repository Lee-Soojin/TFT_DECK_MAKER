import firebaseApp, { auth } from "./firebase.js";
import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  signUp(email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
