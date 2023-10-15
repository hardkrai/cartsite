import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Product from './components/product';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header />
      <Routes>
        <Route path='/' element={<Product/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
