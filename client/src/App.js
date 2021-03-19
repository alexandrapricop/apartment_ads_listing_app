import './all.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import AddItem from './pages/AddItem/script';
import Home from './pages/Home/script';
import Header from './components/Header/script'
import Footer from './components/Footer/script';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/add-item">
          <AddItem />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
