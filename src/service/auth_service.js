import firebaseApp, { auth } from "./firebase.js";
import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;

export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
  return auth().signOut();
}
