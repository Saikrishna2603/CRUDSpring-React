import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmpsComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ListEmpsComponent />} />
          <Route path="/employee" element={<ListEmpsComponent />} />
          <Route path = "/" element = { <ListEmpsComponent /> }></Route>
              <Route path = "/employees" element = { <ListEmpsComponent /> }></Route>
              <Route path = "/add-employee" element = { <EmployeeComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <EmployeeComponent />}></Route>
        </Routes>
      </div>
      <FooterComponent/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
