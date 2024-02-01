import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/getData')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home data={users}/>
    </div>
  );
}

export default App;
