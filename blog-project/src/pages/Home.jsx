import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home({ blogs, setBlogs }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Lifestyle",
    "Travel",
    "Health",
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

  const handleLike = (id) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? { ...blog, likes: blog.likes + 1 }
          : blog
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO BLOGSPACE</span>

          <h1>
            Stories that inspire.
            <br />
            Ideas that matter.
          </h1>

          <p>
            Discover amazing stories, learn new things and
            share your thoughts with the world.
          </p>

          <a href="#blogs" className="hero-btn">
            Explore Articles →
          </a>
        </div>
      </section>

      <section className="blog-section" id="blogs">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR BLOG</span>
            <h2>Latest Articles</h2>
          </div>

          <span>{filteredBlogs.length} Articles</span>
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onLike={handleLike}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="empty-message">
              No articles found. Try another search.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;