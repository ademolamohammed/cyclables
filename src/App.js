import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header"
import axios from 'axios';

function App() {

  const [data,setData] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success    
    setData(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);


  })
  .finally(function () {
    // always executed
    console.log("i'm finally and i'll always execute")

  });


  return (
    <div>
      <Header />
      {
        data.map((item) => (
          <div>
            <h2>{item.id}</h2>
            <p>{item.title}</p>

          </div>
        ))
      }
    </div>
  );
}

export default App;
