import { BrowserRouter, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Cards from "./components/cards/cards";
import "./service/firebase";
import MainHome from "./components/home/main_home";

function App({ authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Route exact path="/" component={MainHome} />
        <Route
          exact
          path="/card"
          render={() => (
            <Cards authService={authService} cardRepository={cardRepository} />
          )}
        />
        <Route
          path="/signup"
          render={() => <SignUp authService={authService} />}
        />
        <Route
          path="/login"
          render={() => <Login authService={authService} />}
          exact
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
