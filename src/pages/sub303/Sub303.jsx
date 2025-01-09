import axios from 'axios';
import { useEffect, useState } from 'react';
import commons from '../../styles/common.module.css';
import styles from '../../styles/sub303/sub303.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const SearchPage = () => {
    const [data, setData] = useState([]); // API 응답을 받을 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태
    const { mainTitle, subTitle } = useDocumentTitle(); // 커스텀 훅
    const API_URL = "http://localhost:8080/api/searchNews";

    // 데이터 가져오는 함수
    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setData(response.data); // 받아온 데이터를 상태에 저장
            console.log(response.data);
        } catch (err) {
            console.error("데이터 요청 중 오류 발생:", err);
            setError(err.message); // 오류 상태 업데이트
        } finally {
            setLoading(false);
        }
    };

    // 컴포넌트가 처음 렌더링될 때만 데이터 가져오기
    useEffect(() => {
        getData();
    }, []);

    // 로딩 중이거나 오류가 있으면 적절한 메시지 출력
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류 발생: {error}</div>;

    // <b> 태그를 제거하는 함수
    const removeBoldTags = (text) => {
        return text.replace(/<\/?b>/g, '').replace(/&quot;/g, ''); // <b>와 </b> 태그, &quot; 제거
    };
    const handleClick = (e) => {

    }

    // 썸네일 이미지가 없을 경우 기본 이미지를 반환하는 함수
    const getThumbnail = (thumbnail) => {
        // 썸네일이 없거나 유효하지 않으면 기본 이미지 사용
        return thumbnail ? thumbnail : "/images/logo2_w.png";
    };

    return (
        <>
            <div className={commons.container__box__title}>
                <h2 className={commons.main_title}>보도자료 찾아보기</h2>
                <p className={commons.sub_title}>원하는 지역에서의 녹지행사를 찾아보세요</p>
            </div>

            {/* 검색바 */}
            <ul className={commons.common_search_container}>
                <li>
                    <p>검색어 검색</p>

                    <div className={commons.common_search_div}>
                        <form name="" action="/">
                            <input type="text" name="" id="" placeholder='' />
                            <button className="material-icons">search</button>
                        </form>
                    </div>
                </li>
            </ul>



            <div className={commons.container__box__title}>

            </div>
            <div style={{ marginTop: "20px" }}>
                {/* 검색 결과 출력 */}
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div className={styles.content_container} key={index}>
                            <div className={styles.Sub303__newcontainer}>
                                {/* 썸네일 이미지 */}
                                <div className={styles.Sub303__newtitle}>
                                    <img
                                        src={getThumbnail(item.thumbnail)} // 썸네일이 없으면 기본 이미지 사용
                                        alt="썸네일"
                                        onClick={() => window.open(item.link, "_blank")}
                                    />
                                </div>
                                {/* 뉴스 내용 */}
                                <div className={styles.Sub303__newimage}>
                                    <div className={styles.Sub303__columns}>
                                        <div className={styles.Sub303__writerday}>
                                            {/* 작성자 및 날짜 */}
                                            <p>{item.date}</p>
                                            {/* 제목 */}
                                            <p>
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {removeBoldTags(item.title)}
                                                </a>
                                            </p>

                                            {/* 설명 */}
                                            <div className={styles.Sub303__desribe}>
                                                {removeBoldTags(item.description)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>검색 결과가 없습니다.</p> // 결과가 없으면 메시지 출력
                )}
            </div>

            <div>
                <ul className={commons.paging_num_ul}>
                    <li className="material-icons prev">keyboard_double_arrow_left</li>
                    <li className="material-icons prev">chevron_left</li>
                    <li className={commons.active}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li className="material-icons next">chevron_right</li>
                    <li className="material-icons next">keyboard_double_arrow_right</li>
                </ul>
            </div>
        </>
    );
};

export default SearchPage;
