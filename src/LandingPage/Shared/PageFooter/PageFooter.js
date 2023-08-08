import youtubeIcon from "../assets/icons8-youtube-50.png";
import twitterIcon from "../assets/icons8-twitter-50.png";
import facebookIcon from "../assets/icons8-facebook-50.png";
import instagramIcon from "../assets/icons8-instagram-50.png";

import "./PageFooter.css";

const navigation = [
  { id: 0, name: "Our Works" },
  { id: 1, name: "About" },
  { id: 2, name: "Services" },
  { id: 3, name: "Careers" },
  { id: 4, name: "Latest News" },
  { id: 5, name: "Contact" }
];

const socialMedia = [
  {
    id: 0,
    name: "Facebook",
    icon: {
      url: facebookIcon,
      alt: "Facebook icon",
      width: 50,
      height: 50
    }
  },
  {
    id: 1,
    name: "Twitter",
    icon: {
      url: twitterIcon,
      alt: "Twitter icon",
      width: 50,
      height: 50
    }
  },
  {
    id: 2,
    name: "Youtube",
    icon: {
      url: youtubeIcon,
      alt: "Youtube icon",
      width: 50,
      height: 50
    }
  },
  {
    id: 3,
    name: "Instagram",
    icon: {
      url: instagramIcon,
      alt: "Instagram icon",
      width: 50,
      height: 50
    }
  }
];

function PageFooter() {
  return (
    <footer className="container-fluid m-0 p-0 digital-footer">
      <div className="container py-5 px-lg-5 digital-ctn">
        <div className="row py-5">
          <section className="col-12 col-md-12 col-lg">
            <h2 className="mb-4 h5">Follow</h2>
            <FooterSocial list={socialMedia} className={"social-media"} />
          </section>

          <section className="col-12 col-sm navigation mt-sm-4 mt-lg-0">
            <h2 className="mb-4 h5">Navigation</h2>
            <FooterList list={navigation} className={"navigation-list"} />
          </section>

          <section className="col-12 col-sm contact mt-sm-4 mt-lg-0">
            <h2 className="mb-4 h5">Head Quarter</h2>
            <address className="address">
              <p className="m-0">5678 Creative Street</p>
              <p className="m-0">Suite #345</p>
              <p className="m-0">Los Angeles, CA 90021</p>
              <div className="map mt-3">
                <a href="#0" className="link">View on Map</a>
              </div>
            </address>
          </section>

          <section className="col-12 col-sm conversation mt-sm-4 mt-lg-0">
            <h2 className="mb-4 h5">Conversation</h2>
            <p className="m-0">hello@UnNormal.com</p>
            <p>646-932-3253</p>
          </section>
        </div>
      </div>

      <div className="container-fluid digital-copy d-flex justify-content-center align-items-center py-4 px-4 px-sm-0">
        <p>
          <small>
          &copy; All rights Reserved | Images from &nbsp;
          <a target="_blank" href="http://www.unsplash.com">Unsplash</a> | Icons by <a target="_blank" href="https://icons8.com">Icons8</a> | Inspired by <a href="https://undsgn.com/uncode/" target="_blank">Uncode</a>
          </small>
        </p>
      </div>
    </footer>
  )
}

function FooterList({ list, className }) {
  const listItems = list.map(item => (
    <li key={item.id} className="py-1">
      <a href="#0" className="link">{item.name}</a>
    </li>
  ))
  return (
    <ul className={`${className} list-unstyled`}>{listItems}</ul>
  )
}

function FooterSocial({ list, className }) {
  const listItems = list.map(item => (
    <li key={item.id} className="px-2 py-1">
      <a href="#0" className="link link-img">
        <img src={item.icon.url}
          alt={item.icon.alt}
          width={item.icon.width}
          height={item.icon.height}
        />
      </a>
    </li>
  ))

  return (
    <ul className={`${className} list-unstyled`}>{listItems}</ul>
  )
}


export default PageFooter
