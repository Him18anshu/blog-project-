import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateBlog({ blogs, setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingBlog = blogs.find((blog) => blog.id === id);

  const [formData, setFormData] = useState({
    title: existingBlog?.title || "",
    description: existingBlog?.description || "",
    content: existingBlog?.content || "",
    category: existingBlog?.category || "Technology",
    author: existingBlog?.author || "",
    image: existingBlog?.image || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.content.trim() ||
      !formData.author.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (existingBlog) {
      setBlogs((prev) =>
        prev.map((blog) =>
          blog.id === id
            ? { ...blog, ...formData }
            : blog
        )
      );
    } else {
      const newBlog = {
        ...formData,
        id: crypto.randomUUID(),
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        likes: 0,
      };

      setBlogs((prev) => [newBlog, ...prev]);
    }

    navigate("/");
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <span className="section-label">BLOG EDITOR</span>

        <h1>{existingBlog ? "Edit Article" : "Create New Blog"}</h1>

        <p>Share your ideas and stories with the world.</p>

        <form onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            required
          />

          <label>Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description"
            required
          />

          <label>Author Name</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Travel</option>
            <option>Health</option>
            <option>Education</option>
            <option>Business</option>
          </select>

          <label>Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image URL"
          />

          <label>Blog Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog here..."
            rows="10"
            required
          />

          <button type="submit" className="submit-btn">
            {existingBlog ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateBlog;