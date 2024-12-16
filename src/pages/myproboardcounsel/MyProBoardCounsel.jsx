import { Link, useLocation } from 'react-router-dom';
import commons from '../../styles/common.module.css';
import mycommons from '../../styles/mycommon.module.css';
import styles from '../../styles/mypage/mymain.module.css';
import MyProMenu from '../../components/MyProMenu';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import myprostyles from '../../styles/mypage/myproboardcounsel.module.css';

function MyProBoardCounsel(props) {
   const location = useLocation();

   const { mainTitle, subTitle } = useDocumentTitle();

   return (
      <>
         <div className={commons.container__box__title}>
            <h2 className={commons.main_title}>{mainTitle}</h2>
            <p className={commons.sub_title}>{subTitle}</p>
         </div>

         {/* 마이 페이지 메뉴 */}
         <MyProMenu />


         <div className={styles.my__board__tabmenu}>
            <ul>
               <li className={`${styles.link} ${location.pathname === '/myproboardcounsel' ? styles.boardActive : ''}`}>
                  <Link to="/myproboardcounsel">전문가와의 상담</Link>
               </li>
               <li className={`${styles.link} ${location.pathname === '/myproboardcounselmy' ? styles.boardActive : ''}`}>
                  <Link to="/myproboardcounselmy">내 상담내역</Link>
               </li>
            </ul>
         </div>

         <div className={mycommons.my__container} style={{ margin: "60px auto 120px" }}>
            <div style={{ width: "100%", height: "3000px", backgroundColor: "#fff" }}>
               <div>
                  <ul className={myprostyles.myprocounsel__inquiry__number}>
                     <li>총 <span>16</span>건</li>
                     <li className={myprostyles.myprocounsel__search}>
                        <div className={myprostyles.myprocounsel__search__box}>
                           <form action="">
                              <div className={commons.common__searchbar__box}>
                                 <input type="text" className={commons.common__search__input} placeholder="검색어를 입력해주세요" />
                                 <span className="material-icons">search</span>
                              </div>
                           </form>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className={myprostyles.myprocounsel__container__list__table}>
                  <table className={myprostyles.myprocounsel__list_table}>
                     <thead>
                        <tr>
                           <th>No</th>
                           <th>제목</th>
                           <th>등록일</th>
                           <th>처리상태</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>10</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                              <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>9</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                              <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>8</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                              <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>7</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                              <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>6</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                              <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>5</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>4</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td><p>약은 약사에게 진료는 의사에게</p></td>
                           <td>2024.12.10</td>
                           <td>
                           <div className={myprostyles.myprocounsel__status_waiting}>
                                 답변대기
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               {/* paging 영역 start */}
               <div>
                  <ul className={myprostyles.paging_num_ul}>
                     <li className="material-icons prev">keyboard_double_arrow_left</li>
                     <li className="material-icons prev">chevron_left</li>
                     <li className={myprostyles.active}>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>5</li>
                     <li className="material-icons next">chevron_right</li>
                     <li className="material-icons next">keyboard_double_arrow_right</li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}

export default MyProBoardCounsel;