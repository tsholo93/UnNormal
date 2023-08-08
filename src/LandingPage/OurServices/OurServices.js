const services = [
  {
    id: 0,
    title: "Brand Brilliance",
    text: "Let your brand shine with our top-notch branding services. We'll design a captivating identity that reflects your values and leaves a lasting impression on your customers."
  },
  {
    id: 1,
    title: "Product Perfection",
    text: "Elevate your products with our expert touch! From concept to prototype, we'll craft innovative designs that captivate your customers and set you apart in the market."
  },
  {
    id: 2,
    title: "E-Commerce Enchantment",
    text: "Boost your online sales with our e-commerce design magic. Our captivating online stores will turn visitors into loyal customers, one click at a time."
  },
  {
    id: 3,
    title: "Web Design Wonder",
    text: "Get ready to impress your audience with stunning, user-friendly websites that stand out from the crowd. Our team of talented designers will bring your vision to life, ensuring your online presence is unforgettable!"
  },
  {
    id: 4,
    title: "Print Perfection",
    text: "From business cards to brochures, we'll bring your print materials to life with a touch of creativity and professionalism. Get noticed in the real world!"
  },
  {
    id: 6,
    title: "Mobile Magic",
    text: "Reach your audience on the go with mobile app design that delights. We'll create intuitive interfaces and seamless experiences, making your app a user favorite."
  },
]


function OurServices() {
  const listItems = services.map(service => (
    <li key={service.id} className="col-12 col-md-6 col-lg-4 py-3" style={{
    }}>
      <h3 className="h4">{service.title}</h3>
      <p>{service.text}</p>
    </li>
  ))
  return (
    <div className="container py-5 px-lg-5 d-flex flex-column justify-content-center align-items-center" style={{
      minHeight: "60vh",
    }}>
      <ol className="row gy-2 gx-5" style={{
        listStyle: "decimal-leading-zero inside"
      }}>{listItems}</ol>
    </div>
  )
}

export default OurServices
