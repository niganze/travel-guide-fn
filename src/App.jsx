import  { useEffect } from "react";
import Footer from "./components/Footer";
import Homesite from "./components/Homesite";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
// import AdminDashBoard from "./components/dashboard";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Gallery from "./components/Gallery";
// import AdminDashBoard from "./components/dashboard";
// import SignUp from "./components/signUP";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      {/* <AdminDashBoard /> */}

     <ScrollToTop />
      <Navbar />
      <Homesite />
      <Services />
      <Gallery/>
      <Recommend />
      <Testimonials />
      <Footer /> 
      {/* <SignUp/> */}
    </div>
  );
}
