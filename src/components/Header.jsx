import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/">홈</Link>
            <Link to="/sub401">공지사항</Link>
            <Link to="/sub302">폐약품수거함</Link>
        </header>
    );
}

export default Header;