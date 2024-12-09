import React from 'react';
import '../../styles/sub302.css'

function Sub302(props) {


    return (
        <div className='Sub302__content-container'>
            <div className='Sub302__content-header'>
                <h1>폐의약품 수거함 찾기</h1>
                <p>원하는 지역에서의 녹지행사를 찾아보세요.</p>
            </div>
            <div className='Sub302__search-FieldContainer'>
                <div className='Sub302__mainField'>
                    <p>지역 선택</p>
                    <div className='Sub302__filterField'>
                        <div className='Sub302__selects'>
                            <select name="" id="" className='Sub302__select1'>
                                <option>서울특별시</option>
                                <option>서울특별시</option>
                                <option>서울특별시</option>
                            </select>
                        </div >
                        <div className='Sub302__selects'>
                            <select name="" id="" className='Sub302__select2'>
                                <option>강남구</option>
                                <option>강남구</option>
                                <option>강남구</option>
                            </select>
                        </div>
                        <div className='Sub302__selects'>
                            <select name="" id="" className='Sub302__select3'>
                                <option>역삼동</option>
                                <option>역삼동</option>
                                <option>역삼동</option>
                            </select>
                        </div>
                    </div>
                    <div className='Sub302__searchbarField'>
                            <p>검색어 검색</p>
                        <div className='Sub302__searchField'>
                            <div class="Sub302__search-container">
                                <input type="text" class="Sub302__search-input" placeholder="상세주소로 검색하기" />
                                <button class="Sub302__search-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Sub302__resultField'>
                <p>"서울특별시 강북구 우이동’에서 ‘검색어’(으)로 검색한 결과는 총 0건 입니다."</p>
                <div className='Sub302__map'></div>
            </div>
        </div>
    );
}

export default Sub302;