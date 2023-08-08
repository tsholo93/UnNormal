import "./style.css";

function BlogCard({data, test}) {
  return (
    <article className={test + " d-flex flex-column justify-content-start align-items-center digital-blogcard"}>
      <figure>
        <img src={data.image.url} />
      </figure>
      <div className="d-flex flex-column px-3 py-4">
        <h3 className="h4">{data.title}</h3>
        <p className="order-first">{data.date}</p>
        <p>{data.description}</p>
      </div>
    </article>
  )
}

export default BlogCard
