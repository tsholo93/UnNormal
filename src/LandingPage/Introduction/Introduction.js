import "./Introduction.css";
//#FCFBF4

function Introduction() {
  return (
    <div className="container-fluid py-5" style={{
      minHeight: "60vh",
      background: "#0A0B0D",
      color: "#F2F2F2"
    }}>
    <div className="container py-5 d-flex flex-column justify-content-center align-items-flex-start digital-intro">
      <div>
      <h2 className="m-0 d-inline-block">
        Hey there! We are UnNormal.&nbsp;
      </h2>
      <p className="d-inline">
        We are all about turning your ideas into stunning realities. Our team of creative minds is here to craft exceptional web and product designs that not only look great but also connect with your audience. We love creating user-friendly experiences and staying on top of the latest innovations to make your project shine. Whether you're a startup looking for an eye-catching website or a visionary brand with a groundbreaking product in mind, we've got you covered! Let's team up and bring your design dreams to life!
      </p>
      </div>
    </div>
    </div>
  )
}

export default Introduction
