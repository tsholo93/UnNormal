import BlogCard from "./BlogCard";

import phoneAlexa from "./assets/phone-alexa.jpg";
import designTeam from "./assets/design-team.jpg";
import uxDesign from "./assets/ux-design.jpg";

const latestNews = [
  {
    id: 0,
    title: "Eco-Friendly Designs: Saving the Planet One Product at a Time",
    description: "Learn how designers are putting their creativity to work to make products that are good for the environment and still look super cool!",
    date: "25.03.2022",
    image: {
      url: designTeam
    }
  },
  {
    id: 1,
    title: "Hey, Alexa! How Voice-Controlled Design is Making Life Simpler",
    description: "Explore the world of voice-controlled gadgets and find out how designers are crafting user-friendly experiences with voice commands.",
    date: "25.03.2022",
    image: {
      url: phoneAlexa
    }
  },
  {
    id: 2,
    title: "Designing for Gen Z: Making Your Website Their Favorite Hangout Spot",
    description: "Get to know the likes and dislikes of Generation Z users, and discover the best ways to create a website they'll absolutely love.",
    date: "25.03.2022",
    image: {
      url: uxDesign
    }
  }
]

function BlogCards() {

  const listItems = latestNews.map(news => (
    <li key={news.id} className="col-lg">
      <BlogCard data={news}  />
    </li>
  ))

  return (
    <ul className="container-fluid list-unstyled">
      <div className="row gy-4">{listItems}</div>
    </ul>
  )
}

export default BlogCards
