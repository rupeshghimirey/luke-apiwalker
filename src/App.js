import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Display from './components/Display';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
      
      <SearchForm></SearchForm>
      <Switch>
        <Route exact path = '/:category/:id'>
          <Display></Display>


        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
