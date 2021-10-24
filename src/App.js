
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BlockDetail from './Components/BlockDetail';
import Home from './Components/Home';
import TransactionDetail from './Components/TransactionDetail';


function App() {
  
  return (
    <>
    <h1>Ugly EtherScan</h1>
    <Switch>  
      <Route exact path = '/'>
        <Home></Home>
      </Route>
      <Route
        exact path='/block/:blockNumber'
        render={({match}) => <BlockDetail blockNumber={match.params.blockNumber}/>}
      />
      <Route
        exact path='/transaction/:hash'
        render={({match}) => <TransactionDetail hash={match.params.hash}/>}
      />
    </Switch>
    </>
  );
}

export default App;
