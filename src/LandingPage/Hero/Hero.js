import video from "./assets/video-creative-agency-1.mp4";
import videoWebm from "./assets/video-creative-agency-1.webm";
import quoteIcon from "./assets/icons8-chat-100.png";
import "./Hero.css";

function Hero(){
  return (
    <section className="container-fluid d-flex m-0 px-2 py-4 vh-100 vw-100 digital-hero" style={{
      overflow: "hidden"
    }}>

      <div id="video-container">
        <video muted={true} autoPlay={true} loop={true}>
          <source src={videoWebm} type="video/webm" />
          <source src={video} type="video/mp4"/>
        </video>
      </div>

      <div className="video-overlay">
      <h1 className="display-1 text-center text-capitalize">
        <span className="d-block">A digital design</span>
        <span className="d-block">&</span>
        <span className="d-block">marketing studio</span>
      </h1>
      <p className="text-center lead px-2 py-2">
        Join us at UnNormal Studio, where creativity knows no bounds, and together, we'll bring brilliance to life!
        Let's make something great together
      </p>
      <div className="text-center mx-auto mt-4 mt-lg-5 digital-cta">
        <a href="#0" className="rounded-5 py-3 px-4 py-lg-4 px-lg-5">
          <img src={quoteIcon} />
          <strong>Get a quote</strong>
        </a>
      </div>
      </div>
    </section>
  )
}


export default Hero
