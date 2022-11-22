import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Plan />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
