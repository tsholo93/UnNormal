import sponsors from "./sponsorsData";

function Sponsors() {
  const listItems = sponsors.map(sponsor => (
    <li key={sponsor.id} className="col-3 col-lg-2 p-2">
      <img src={sponsor.icon.url} alt="" width="100" />
    </li>
  ))

  return (
    <section className="container-fluid py-5 d-flex flex-column justify-content-center" style={{
      minHeight: "80vh",
      background: "#0A0B0D",
      color: "#F2F2F2"
    }}>
      <ul className="list-unstyled container">
        <div className="row">
          {listItems}
        </div>
      </ul>
    </section>
  )
}

export default Sponsors
