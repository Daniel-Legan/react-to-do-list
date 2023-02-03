import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import List from '../List/List';
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <Router>
        <Route path="/" exact>
          <Form />
          <List />
        </Route>
      </Router>
    </div>
  );
}

export default App;
