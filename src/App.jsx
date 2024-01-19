import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RouteConstant } from "./shared/constants/route";
// START: GLOBAL COMPONENT
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Donate from "./components/Navigation/Donate";
// END: GLOBAL COMPONENT

// START: PAGE
import Home from "./pages/home/Home";
import About from "./pages/about/About";

import Education from "./pages/education/Education";
import EducationForm from "./pages/education/educationForm/EducationForm";
import NewsMedia from "./pages/news/NewsMedia";
// --------------------HEALTHCARE PAGE----------------
import Healthcare from "./pages/healthcare/Healthcare";
import HealthcareForm from "./pages/healthcare/healthcareForm/HealthcareForm";
// -----------------BLOG-----------------------
import Detail from "./pages/blog/detail";
import BlogList from "./pages/blog/Blog";
// --------------------MEMBERSHIP PAGE-----------------------
import Trustee from "./pages/membership/Trustee";
import Contact from "./pages/contact/Contact";

import ThankYou from "./pages/commonPage/ThankYou";
import ErrorPage from "./pages/commonPage/ErrorPage";
import Certificate from './components/certificate/certificate'
// END: PAGE
function App() {
  return (
    <div className="app_component_nav">
        <>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path={RouteConstant.ABOUT_US} element={<About />} />
            <Route path={RouteConstant.EDUCATION} element={<Education />} />
            <Route path={RouteConstant.EDUCATION_ONLINE_FORM} element={<EducationForm />} />
            <Route path={RouteConstant.HEALTHCARE} element={<Healthcare />} />
            <Route path={RouteConstant.HEALTHCARE_ONLINE_FORM} element={<HealthcareForm />} />
            <Route path={RouteConstant.BLOG} element={<BlogList />} />
            <Route path="/blog/detail/:path" element={<Detail />} />
            <Route path={RouteConstant.MEMBERSHIP} element={<Trustee />} />
            <Route path={RouteConstant.NEWS_MEDIA} element={<NewsMedia />} />
            <Route path={RouteConstant.CONTACT} element={<Contact />} />
            <Route path={RouteConstant.DONATE} element={<Donate />} />
            <Route path="/certificate/:id" element={<Certificate/>}/>
            <Route path={RouteConstant.THANK_YOU} element={<ThankYou/>} />
            <Route path={RouteConstant.ERROR_PAGE} element={<ErrorPage/>}/>
          </Routes>
          <Footer />
        </>
    </div>
  );
}
export default App;
