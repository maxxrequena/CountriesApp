import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import DetailCountry from './components/DetailCountry/DetailCountry.jsx'
import CreateActivity from './components/Activity/CreateActivity.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path='/' component={Landing}/>
       <Route exact path='/home' component={Home}/>
       <Route  path='/countries/:id' component={DetailCountry}/>
       <Route  path='/activity' component={CreateActivity}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
