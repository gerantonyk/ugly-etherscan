
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BlockDetail from './Components/BlockDetail';
import Home from './Components/Home';
import TransactionDetail from './Components/TransactionDetail';
import React, {useState} from "react"
import { provider } from './conection';
import EnviromentSelector from './Components/EnviromentSelector';

export const EnviromentContext = React.createContext({
  enviroment: provider,
  setEnviroment: () => {}
});

function App() {
  const [enviroment,setEnviroment] = useState(provider)
  const value ={enviroment,setEnviroment} 
  return (

    <EnviromentContext.Provider value={value}>
      <div className='App-header'>
        <h1>Ugly EtherScan</h1>
        <div>
          <label>Network </label><EnviromentSelector></EnviromentSelector>
        </div>
          
      </div>
    <Switch>  
      <Route exact path = '/'>
        <Home> </Home>
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
    </EnviromentContext.Provider>
  );
}

export default App;
