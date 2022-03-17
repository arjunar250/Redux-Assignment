import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import Menu from './component/Menu';
import Home from './component/Home';
import WishList from './component/Wishlist';
import Reducer from './reducer/Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';





function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=United+States`)
      .then((res) => res.json())
      .then((output) => {
       setData(output);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Provider store={createStore(Reducer, data)}>
      <BrowserRouter>
        <Menu />
        <ToastContainer autoClose={4000} position={'top-right'}/>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/wishlist`} element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
