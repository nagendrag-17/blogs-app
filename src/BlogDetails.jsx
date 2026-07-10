import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, ispanding } = useFetch(
    "https://blogs-api-0rwc.onrender.com/blogs/" + id
  );

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://blogs-api-0rwc.onrender.com/blogs/" + blog.id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {ispanding && <div>Loading...</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;