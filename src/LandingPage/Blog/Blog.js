import BlogCards from "./BlogCards";
import "./style.css";

function Blog() {
  return (
    <section className="container digital-blog py-4">
      <div className="text-center my-lg-5 my-3 p-2">
        <h2>Latest News</h2>
        <p className="digital-blogparagraph">
          Step into a world of creativity, innovation, and fun as we bring you the most exciting updates from the worlds of web and product design.
        </p>
      </div>
      <BlogCards />
      <div className="digital-cta mb-5">
        <a href="#0" className="py-4 px-5 rounded-5">Visit Blog</a>
      </div>
    </section>
  )
}

export default Blog
