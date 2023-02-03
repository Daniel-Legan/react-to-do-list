import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import List from '../List/List';

function App() {
  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <Router>        
        <Route path="/" exact>
          <List/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
