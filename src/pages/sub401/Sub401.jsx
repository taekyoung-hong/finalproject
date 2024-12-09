import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import '../../styles/common.css';
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import '../../styles/sub401.css'
import { Link } from 'react-router-dom';


function Sub401(props) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const rowPage = 10;
    const [totalPage, setTotalPage] = useState(0);


    return (
        <div className='Sub401__content-container'>
            <div className='Sub401__content-header'>
                <h1>공지사항</h1>
                <p>약지기의 소식을 안내합니다.</p>
            </div>

            <div className='Sub401__content-main'>
                <div className='Sub401__searchbar-total'>
                    <span className='Sub401__Total'>전체 29건</span>
                    <div className='Sub401__searchbar-searchIcon'>
                        <input className='Sub401__searchbar' type="text" />
                        <span className="material-symbols-outlined Sub401__searchIcon">
                            search
                        </span>
                    </div>
                </div>
                <div>
                    <table className='Sub401__table'>
                        <thead>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'><p>공지</p></td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내</p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'>
                                    <p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 </p>
                                </td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>
                            <tr className='Sub401__tr'>
                                <td className='Sub401__cell1'>10</td>
                                <td className='Sub401__cell2'><p>소공원 정비사업 시행 안내 </p></td>
                                <td className='Sub401__cell3'>2024.00.00</td>
                            </tr>

                        </tbody>

                    </table>

                    <div className="Sub401__pagination">
                        <Link className="Sub401__prev">&lt;&lt;</Link>
                        <Link className="Sub401__prev">&lt;</Link>
                        <Link className="Sub401__pagination_button">1</Link>
                        <Link className="Sub401__pagination_button">2</Link>
                        <Link className="Sub401__pagination_button">3</Link>
                        <Link className="Sub401__pagination_button">4</Link>
                        <Link className="Sub401__pagination_button">5</Link>
                        <Link className="Sub401__next">&gt;</Link>
                        <Link className="Sub401__next">&gt;&gt;</Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Sub401;