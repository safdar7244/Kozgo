import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import BecomeDriver from "./components/BecomeDriver";
import RideWithUs from "./components/RideWithUs";
import LogIn from "./components/LogIn"
import LogInPage from "./components/LogInPage";
import {AuthContext,AuthProvider} from "./context/AuthContext";
function App() {
  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <Switch>
      <Route path="/ridewithus" exact component={RideWithUs}/>
      <Route path="/becomeadriver" exact component={BecomeDriver}/>
      <Route path="/login" exact component={LogIn} />
      <Route path="/" exact component={Home} />
      </Switch>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
