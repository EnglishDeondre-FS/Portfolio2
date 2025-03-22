import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/blog.css';
import MarkdownRenderer from "../components/markdownRenderer";

const blogPosts = [
  { title: "Rendering", path: "rendering.md" },
];

const Sidebar = () => (
  <div className="sidebar">
    <h2>Blog Posts</h2>
    <ul className="sidebar-list">
      {blogPosts.map((post) => (
        <li key={post.path} className="sidebar-item">
          <Link to={`/blog/${post.path.replace(".md", "")}`} className="sidebar-link">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/markdown/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Post not found"));
  }, [slug]);

  return (
    <div className="blog-content">
      <Sidebar />
      <MarkdownRenderer content={content} />
    </div>
  );
};

const Blog = () => {
  return (
      <nav>
        {blogPosts.map((post) => (
          <Link key={post.path} to={`/blog/${post.path.replace(".md", "")}`}>
            {post.title}
          </Link>
        ))}
      </nav>
  );
};

export {Blog, BlogPost};