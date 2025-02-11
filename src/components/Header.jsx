import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/">홈</Link>
            <Link to="/sub401">공지사항</Link>
            <Link to="/sub302">폐약품수거함</Link>
            <Link to="/mypromain">마이페이지</Link>
            <Link to="/sub303">뉴스api</Link>
        </header>
    );
}

export default Header;