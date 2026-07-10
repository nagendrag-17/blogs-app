import { useState,useEffect } from "react";
import BlogList from "./blog";
import useFetch from "./usefetch";

const Home = () => {
 const { data:blogs, ispanding} = useFetch('http://localhost:8000/blogs');

    


    return (  
        <div className="home">
            { ispanding && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            
            
        </div>
    );
}
 
export default Home;


