import React, { useState } from 'react';
import '../../styles/common.module.css';
import styles from '../../styles/sub401.module.css'
import { Link } from 'react-router-dom';


function Sub401(props) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const rowPage = 10;
    const [totalPage, setTotalPage] = useState(0);


    return (
        <div className={styles.Sub401__content_container}>
            <div className={styles.Sub401__content_header}>
                <h1>공지사항</h1>
                <p>약지기의 소식을 안내합니다.</p>
            </div>

            <div className={styles.Sub401__content_main}>
                <div className={styles.Sub401__searchbar_total}>
                    <span className={styles.Sub401__Total}>전체 29건</span>
                    <div className={styles.Sub401__searchbar_searchIcon}>
                        <input className={styles.Sub401__searchbar} type="text" />
                        <span className="material-symbols-outlined {styles.Sub401__searchIcon}">
                            search
                        </span>
                    </div>
                </div>
                <div>
                    <table className={styles.Sub401__table}>
                        <thead>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}><p>공지</p></td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내</p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}>
                                    <p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 </p>
                                </td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                            <tr className={styles.Sub401__tr}>
                                <td className={styles.Sub401__cell1}>10</td>
                                <td className={styles.Sub401__cell2}><p>소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내소공원 정비사업 시행 안내 </p></td>
                                <td className={styles.Sub401__cell3}>2024.00.00</td>
                            </tr>
                          

                        </tbody>

                    </table>

                    <div className={styles.Sub401__pagination}>
                        <Link className={styles.Sub401__prev}>&lt;&lt;</Link>
                        <Link className={styles.Sub401__prev}>&lt;</Link>
                        <Link className={styles.Sub401__pagination_button}>1</Link>
                        <Link className={styles.Sub401__pagination_button}>2</Link>
                        <Link className={styles.Sub401__pagination_button}>3</Link>
                        <Link className={styles.Sub401__pagination_button}>4</Link>
                        <Link className={styles.Sub401__pagination_button}>5</Link>
                        <Link className={styles.Sub401__next}>&gt;</Link>
                        <Link className={styles.Sub401__next}>&gt;&gt;</Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Sub401;