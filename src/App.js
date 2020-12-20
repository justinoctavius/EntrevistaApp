import { useState } from 'react';
import './App.css';
import Form from './components/formulario';
import Login from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './components/Cards';

function App() {
  const [data, setData] = useState();
  console.log(data);
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Form setData={setData} />
          <Cards datas={data} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
