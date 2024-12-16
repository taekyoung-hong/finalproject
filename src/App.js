import 'reset-css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './pages/main/Container';
import './styles/common.module.css';
import Sub302 from './pages/sub302/Sub302.jsx';
import Sub401 from './pages/sub401/Sub401.jsx';
import MyProMain from './pages/mypromain/MyProMain.jsx';
import MyProBoardCounsel from './pages/myproboardcounsel/MyProBoardCounsel.jsx';
import MyProBoardCounselMy from './pages/myproboardcounselmy/MyProBoardCounselMy.jsx';
import MyProUserInfo from './pages/myprouserinfo/MyProUserInfo.jsx';
import MyProBoardInquiry from './pages/myproboardinquiry/MyProBoardInquiry.jsx';








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
          
          {/* pro 마이페이지 */}
          <Route path='/mypromain' element={<MyProMain />} />
          {/* pro 회원정보  */}
          <Route path='/myprouserinfo' element={<MyProUserInfo />} />
          {/* pro 게시판 / 전문가와의 상담 */}
          <Route path='/myproboardcounsel' element={<MyProBoardCounsel />} />
          {/* pro 게시판 / 내 상담내역 */}
          <Route path='/myproboardcounselmy' element={<MyProBoardCounselMy  />} />
          {/* pro 게시판 / 운영진에게 문의 */}
          <Route path='/myproboardinquiry' element={<MyProBoardInquiry />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;