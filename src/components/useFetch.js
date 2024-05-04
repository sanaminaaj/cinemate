
import { useState,useEffect } from 'react'

export default function useFetch(apiPath,queryTerm="") {
   
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryTerm}`

    
    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url).then(response=>{
            if(!response.ok){
              throw new Error('Network Response was not ok');
            }
            return response;
          });
          const data = await response.json();
          setData(data.results);
        }
        fetchMovies();
      }, [url])
    
  return {data};
}
