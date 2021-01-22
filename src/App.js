import LandingPage from './components/LandingPage';
import GlobalStyle from  './globalStyles';
import Brands from './components/Brands/index';
import About from './components/About/index';
import Cards from './components/Cards/index';
import Company from './components/Company/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index'
import İntro from './components/İntro/index';
import Contact from './components/Contact/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyle/>
     <Router>
      <Switch>
        <Route path="/service">
          <Header/>
          <İntro/>
          <Cards/>
          <Brands/>
          <Footer/>
        </Route>
        <Route path="/menu">
          <Header/>
          <İntro/>
          <About/>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Header/>
          <İntro/>
          <Contact/>
          <Company/>
          <Footer/>
        </Route>
        <Route path="/">
          <LandingPage/>
          <Brands/>
          <About/>
          <Cards/>
          <Company/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
