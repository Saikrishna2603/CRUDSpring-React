import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmpsComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ListEmpsComponent />} />
          <Route path="/employee" element={<ListEmpsComponent />} />
        </Routes>
      </div>
      <FooterComponent/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
