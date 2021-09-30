import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path='/' component={Landing}/>
       <Route  path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
