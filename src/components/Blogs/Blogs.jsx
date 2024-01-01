import BlogItem from "./BlogItem";
import productsData from "../../data.json";
import { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [blogs] = useState(productsData["blogs"]);
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Blog</h2>
          <p>Her Dikişte İlham ve Yenilik!</p>
        </div>
        <ul className="blog-list">
        {blogs.map((blog) => (
              <BlogItem blogItem={blog} key={blog.id} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;