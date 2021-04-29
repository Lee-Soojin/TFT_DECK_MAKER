import { BrowserRouter, Route } from "react-router-dom";
import styles from "./app.module.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Start from "./components/start/start";
import "./service/firebase";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
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
