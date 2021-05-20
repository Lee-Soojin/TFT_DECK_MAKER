import { firebaseAuth, githubProvider, googleProvider } from "./firebase.js";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  signUp(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
