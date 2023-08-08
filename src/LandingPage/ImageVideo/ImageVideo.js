import img from "./computer.jpg";
import "./ImageVideo.css";

function ImageVideo() {
  return (
    <section className="container-fluid m-0 p-0 digital-img-cta">
      <figure className="p-0 m-0">
        <img src={img} />
      </figure>
    </section>
  )
}

export default ImageVideo
