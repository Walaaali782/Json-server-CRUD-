import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/1-Header/Header';
import Sidebar from './components/2-Sidebar/Sidebar';
import Products from './components/4-Products/Products';
import Home from './components/3-Home/Home';
import Add from './components/5-Add/Add';
import View from './components/6-View/View';

function App() {
  return (
    <div className="App">
   <Header />

<div className='row ' >


<div className='col-2 sidebar' >
<Sidebar />
</div>

<div className='half col-10 ' >

<Routes>
        <Route path="/" element={<>
<Home/>
        </>} />     
   
    
        <Route path="/Products" element={<>
          <Products />
        </>} />

        <Route path="/Products/Add" element={<>
         <Add/>
        </>} />
   
        <Route path="/Products/:productId" element={<>
       <View/>
        </>} />



</Routes>
    
      






</div>


</div>

</div>
  );
}

export default App;
