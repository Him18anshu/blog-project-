import { Link } from "react-router-dom";

function BlogCard({ blog, onLike, onDelete }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
        />
      </Link>

      <div className="blog-content">
        <span className="category">{blog.category}</span>

        <Link to={`/blog/${blog.id}`} className="blog-title">
          <h2>{blog.title}</h2>
        </Link>

        <p>{blog.description}</p>

        <div className="blog-meta">
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <div className="card-actions">
          <button onClick={() => onLike(blog.id)}>
            ❤️ {blog.likes}
          </button>

          <Link to={`/blog/${blog.id}`} className="read-more">
            Read More →
          </Link>

          {onDelete && (
            <button
              className="delete-btn"
              onClick={() => onDelete(blog.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default BlogCard;