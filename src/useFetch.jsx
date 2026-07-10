
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data,setData]=useState([]);
     const [ispanding, setIsPending] = useState(true);

     useEffect(() =>{
        setTimeout(() => {
        fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        });
    },1000);
    },[url]);

    return { data, ispanding};
};

export default useFetch;