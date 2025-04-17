import React, { useEffect, useState } from 'react'
import axios from 'axios'
// const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

function useFetch(url) {
    console.log(url)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {

      const fetchData = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data);
            setLoading(false)
        
        } catch (error) {
         
            setError(error);
            setLoading(false);
        }
    }// fetchData End
        fetchData();
    }, [])
   


    return { loading, error, data };
}


export default useFetch;