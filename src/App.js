import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './pages/main/Container';
import './styles/common.css';
import Sub302 from './pages/sub302/Sub302.jsx';
import Sub401 from './pages/sub401/Sub401.jsx';




function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 메인 */}
        <Header />
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/sub401' element={<Sub401 />} />
          <Route path='/sub302' element={<Sub302 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;