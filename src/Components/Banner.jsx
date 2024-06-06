import OurTeam from "./OurTeam";
import ImageSlider from "./Slider";
import SuccessSection from "./Success";

const VideoBanner = () => {
  return (
    <>
      <div className="video-banner">
        <video autoPlay muted loop className="video">
          <source
            src="https://oliver-ssl-assets.s3.amazonaws.com/videos/Selco%20Careers%20Final.mp4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Think Atlantis</h1>
          {/* <p>Your subtitle or additional information</p> */}
        </div>
      </div>
      <OurTeam />
      <SuccessSection />
      <ImageSlider />
    </>
  );
};

export default VideoBanner;
