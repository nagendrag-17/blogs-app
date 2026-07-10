import useFetch from "./useFetch";
import BlogList from "./blog";

const Home = () => {
  const { data: blogs, ispanding } = useFetch(
    'https://blogs-api-0rwc.onrender.com/blogs'
  );

  return (
    <div className="home">
      {ispanding && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;


