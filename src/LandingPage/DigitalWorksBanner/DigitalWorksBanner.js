import "./DigitalWorksBanner.css";

const statesCounter = [
  {
    id: 0,
    number: 16,
    name: "Developers"
  },
  {
    id: 1,
    number: 42,
    name: "sites of Day"
  },
  {
    id: 2,
    number: "60+",
    name: "Projects"
  },
  {
    id: 3,
    number: "99%",
    name: "Dedicated"
  }
]


function DigitalWorksBanner() {
  const listItems = statesCounter.map(stat => (
    <li key={stat.id} className="col-6 col-md stat-item">
      <p className="number">{stat.number}</p>
      <p className="name">{stat.name}</p>
    </li>
  ))
  return (
    <section className="container-fluid digital-worksbanner py-5">
      <div className="container">
      <div className="container-fluid py-5">
        <div className="row banner py-4">
          <h2 className="col-lg-7 col-xl display-3 mb-4">Where pixels come alive and creativity thrives</h2>
          <p className=" col-lg-5 col-xl lead paragraph">
            "We collaborate with people, teams and businesses to develop design systems, strategies and processes to do a better creative work everyday."
          </p>
        </div>
      </div>

        <div className="py-5">
          <ul className="list-unstyled container-fluid">
            <div className="row">
              {listItems}
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DigitalWorksBanner
