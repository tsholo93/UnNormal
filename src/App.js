import PageFooter from "./LandingPage/Shared/PageFooter/PageFooter";
import './App.css';
import BuyBanner from "./LandingPage/BuyBanner/BuyBanner";
import Blog from "./LandingPage/Blog/Blog";
import DigitalWorksBanner from "./LandingPage/DigitalWorksBanner/DigitalWorksBanner";
import SelectedWorks from "./LandingPage/SelectedWorks/SelectedWorks";
import Sponsors from "./LandingPage/Sponsors/Sponsors";
import FoundersNote from "./LandingPage/FounderNote/FounderNote";
import Introduction from "./LandingPage/Introduction/Introduction";
import OurServices from "./LandingPage/OurServices/OurServices";
import Hero from "./LandingPage/Hero/Hero";
import PageHeader from "./LandingPage/Shared/PageHeader/PageHeader";
import ImageVideo from "./LandingPage/ImageVideo/ImageVideo";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Hero />
      <Introduction />
      <SelectedWorks />
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-12">
            <Sponsors />
          </div>
          <div className="col-12" style={{
            marginTop: "-23vh"
          }}>
            <FoundersNote/>

          </div>
          <div className="col-12">
            <OurServices/>
          </div>
        </div>
      </div>
      <DigitalWorksBanner />
      <Blog/>
      <ImageVideo />
      <BuyBanner />
      <PageFooter />
    </div>
  );
}

export default App;
