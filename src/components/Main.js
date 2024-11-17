import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Events from "../components/Events";
import VideoUpload from "./VideoUpload";
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import { Gallery } from "./Gallery";

function Main() {
  return (
    <>
      <main>
      <Navbar />
        {/* <Header /> */}
        <ContentSection/>
        <Events />

        <VideoPlayer />

        <About />
    <Gallery/>
        <Contact />

        {/* <VideoUpload /> */}
        <Footer />
      </main>
    </>
  );
}
export default Main;
