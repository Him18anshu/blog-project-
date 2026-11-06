import { Link, useNavigate, useParams } from "react-router-dom";

function BlogDetails({ blogs, setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="not-found">
        <h2>Blog Not Found!</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

  const handleLike = () => {
    setBlogs((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, likes: item.likes + 1 }
          : item
      )
    );
  };

  const handleDelete = () => {
    if (window.confirm("Delete this article?")) {
      setBlogs((prev) => prev.filter((item) => item.id !== id));
      navigate("/");
    }
  };

  return (
    <article className="details-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <span className="category">{blog.category}</span>

      <h1>{blog.title}</h1>

      <div className="details-meta">
        <span>Written by {blog.author}</span>
        <span>{blog.date}</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="details-image"
      />

      <p className="details-description">{blog.description}</p>

      <div className="article-content">
        {blog.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="details-actions">
        <button onClick={handleLike}>
          ❤️ Like ({blog.likes})
        </button>

        <Link to={`/edit/${blog.id}`} className="edit-btn">
          Edit Article
        </Link>

        <button className="delete-btn" onClick={handleDelete}>
          Delete Article
        </button>
      </div>
    </article>
  );
}

export default BlogDetails;