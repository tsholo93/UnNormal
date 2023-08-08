import "./BuyBanner.css";

function BuyBanner() {
  return (
    <section className="digital-buybanner py-5 px-lg-3">
      <h2 className="display-6 heading">We'd love to build <br/> something amazing</h2>
      <p className="px-3 mt-4 px-sm-5">
      Sign up now and unlock the gateway to exclusive surprises! Enjoy a fabulous <strong>25%</strong> off on your first purchase as a token of appreciation for becoming part of our family!
      </p>
      <form className="container-fluid digital-form p-3 px-sm-5 mt-4">
        <div className="row align-items-center gy-5 gy-md-1 gx-xl-1">
          <section className="col-12 col-md-9">
            <input type="email" className="w-100 digital-input p-2 rounded-3" required/>
          </section>

          <section className="col-12 col-md-3 digital-cta">
            <a href="#0" className=" rounded-5 py-4 px-5 px-md-4 py-md-3">Subscribe</a>
          </section>
        </div>
      </form>
    </section>
  )
}




export default BuyBanner
