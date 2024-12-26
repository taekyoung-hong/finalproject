// Example with fetch in Next.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchPage = () => {
   const [data, setData] = useState(null);
  
   const API_URL = "http://localhost:8080/api/searchNews";
   const getData = () => {
       axios.get(
           API_URL
       ).then(res => {
           // console.log(res.data)
           setData(res.data);
       }).catch(
           console.log("에러발생")
       )
   }
   // 최초 한번만 실행 
   useEffect(() => {
       getData();
   }, [])

   return (
      <div>
         <h1>Search Results</h1>
     
      
         {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre> // 결과를 콘솔에서 보기 좋게 표시
         ) : (
            <p>로딩 중...</p>
         )}
      </div>
   );
};

export default SearchPage;
