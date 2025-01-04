import React,{Suspense, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/header/Header"
import axios from 'axios';
import Home from './component/pages/Home';
import AboutUs from './component/pages/AboutUs';
import Service from './component/pages/Service';
import Products from './component/pages/Products';
import Footer from './component/footer/Footer';

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs-page' element={<AboutUs />} />
          <Route path='/service-page' element={<Service />} />
          <Route path='/products-app' element={<Products />} />
        </Routes>
      </Suspense>
      <Footer />
      
      {/* {
        data.map((item) => (
          <div>
            <h2>{item.id}</h2>
            <p>{item.title}</p>

          </div>
        ))
      } */}
    </div>
  );
}

export default App;
