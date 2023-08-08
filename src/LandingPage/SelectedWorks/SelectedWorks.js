import {useState, useRef} from "react";
import filledGlassImg from "./assets/filled-glass-next-to-ash-tray-1920.jpg";
import coconutProductImg from "./assets/bottles-labeled-coconut-1920.jpg";
import billboardImg from "./assets/billboards-in-tunnel-1920.jpg";
import  vintageAdImg from "./assets/eye-glasses-old-camera-watch-1920.jpg";
import squareLogoImg from "./assets/square-logo-1920.jpg";
import openBookImg from "./assets/open-book-1920.jpg";

import "./SelectedWorks.css";

const ourWorks = [
  {
    id: 0,
    image: {
      url: squareLogoImg,
      alt: "logo inside a square"
    },
    type: "web",
  },
  {
    id: 1,
    image: {
      url: coconutProductImg,
      alt: "two bottles next to a plant"
    },
    type: "branding"
  },
  {
    id: 2,
    image: {
      url: filledGlassImg,
      alt: "filled glass next to ash tray"
    },
    type: "branding"
  },
  {
    id: 3,
    image: {
      url: openBookImg,
      alt: "open book with fancy text"
    },
    type: "design"
  },
  {
    id: 4,
    image: {
      url: billboardImg,
      alt: "billboards inside a tunnel passage"
    },
    type: "adv"
  },
  {
    id: 5,
    image: {
      url: vintageAdImg,
      alt: "vintage eye glass, camera and watch next each other"
    },
    type: "adv"
  }
]


function SelectedWorks() {
  const [item, setItem] = useState(ourWorks);
  const menuItems = [...new Set(ourWorks.map(val => val.type))];

  const filterItems = (curcat) => {
    const newItem = ourWorks.filter((newVal) => {
      return (newVal.type === curcat);
    })
    setItem(newItem);
  }
  const filterCategory = curcat => {
    const newItem = ourWorks.filter(newVal => {
      return newVal.category === curcat
    })
  }
  return (
    <section className="container-fluid p-0 m-0">
      <div className="container-fluid p-0 m-0">
        <div className="container text-center py-4 pt-lg-5 pb-lg-2 UnNormal-works">
          <h2>Selected Works</h2>
          <p className="digital-blogparagraph">We've handpicked our finest design creations to share with you, celebrating our love for crafting captivating web and product designs that leave a smile on your face. <br/>Come, be inspired, and explore the artistry that defines us!</p>
          </div>

          <Buttons
          filterItem={filterItems}
          setItem={setItem}
          menuItems={menuItems} />
        <OurWorks item={item} />
      </div>
    </section>
  )
}


function Buttons({filterItem, setItem, menuItems}) {
  const defaultItem = useRef();
  const [active, setActive] = useState(defaultItem);
  return (
    <div className="container-fluid p-4 UnNormal-work-buttons">
          <button
            ref={defaultItem}
            className={`UnNormal-work-button ${active == defaultItem && "active"}`}
            onClick={() => {
                setItem(ourWorks)
                setActive(defaultItem);
              }}>
            Show All
          </button>
      {
        menuItems.map((val, id) => {
          return (
              <button
                className={` UnNormal-work-button ${active == val && "active" }`}
                onClick={() => {
                  filterItem(val)
                  setActive(val)
                }}
                key={id}>
                {val}
              </button>
          )
        })
      }

    </div>
  )
}

function OurWorks({item}) {
  const listItems = item.map(banner => {
    return (
      <a href="#0" className="m-0 p-0 col-12 col-sm-12 col-md-6 col-lg-4" key={banner.id}>
        <figure className="m-0 p-0">
          <img src={banner.image.url} alt={banner.image.alt} />
        </figure>
      </a>
  )
  })

  return (
    <div className="container-fuild p-0 m-0 UnNormal-grid">
      <div className="row g-0 gy-0">
      {listItems}
      </div>
    </div>
  )
}

export default SelectedWorks
