import founderImg from "./founder-img.jpg";
import "./FounderNote.css";

function FounderNote() {
  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column justify-content-center py-5 px-lg-5 rounded-5 content digital-founder" style={{
        background: "#0D65D9",
        color: "#F2F2F2"
      }}>
        <div className="row align-items-center p-md-3 p-lg- 3 p-xl-5">
          <blockquote className="col-12 col-lg-8 quote">
            <p className="lead" style={{
              background: "",
          color: "#F2F2F2",
          }}>
          "We're a team of award-winning strategists, creative, developer, designers writers, illustrators, animators + digital producers who craft brands for the digital age. We specialize in bringing stunning creativity into the real world with a meaningful experience."
          </p>
        </blockquote>

        <div className="col-12 col-lg-4">
          <div className="px-lg-5 d-flex flex-column justify-content-center align-items-center">
            <figure className="pt-4 pt-lg-0 mt-lg-n3">
              <img src={founderImg} className="rounded-circle image shadow-sm" alt="image of a man(founder)"/>
              <figcaption className="px-4 mt-3 mt-xl-3 digital-caption">
                <h4 className="h4">John Doe</h4>
                <p>Founder & CEO</p>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FounderNote
