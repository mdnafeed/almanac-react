import edusbannerImg from "../../assets/edusbanner.jpg";
import ourProgramImage from "../../assets/our-program.png";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RouteConstant } from "../../shared/constants/route";
import educationForm from "../../assets/pdf/education-form.pdf";
import Review from "../../shared/review/Review";
import { FaAngleRight } from "react-icons/fa6";
const Education = () => {
  return (
    <>
      <img src={edusbannerImg} alt="" className="w-100" />
      <Container>
        <h2 className="text-center p-2">EDUCATION</h2>
        <Row>
          <Col lg={12} className="mb-2" style={{ textAlign: "justify" }}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
          <Col lg={12} className="mb-2" style={{ textAlign: "justify" }}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
          <Col lg={12} className="mb-2" style={{ textAlign: "justify" }}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={12} className="text-center">
            <img src={ourProgramImage} className="w-25" />
          </Col>
          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>UPSC Prepration support program</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> IAS, IPS, IRS, and IFS
            </span>
            <span className="d-block">
              <b>&#42; </b>IA&AS, ICAS, ICLS, IDAS, and IDES
            </span>
          </Col>
          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>Medical Prgram</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> MBBS, BDS, BAMS, BUMS, BHMS, MD, and MS
            </span>
            <span className="d-block">
              <b>&#42; </b>BVSc, BSMS, and BNYS
            </span>
            <span className="d-block">
              <b>&#42;</b> B.Pharma, D.Pharma, BPT, BMLT, DMLT, BSc Nursing, BSc
              Occupational Therapy, BMIT, BOTT, BOPT, BCLT, BDT, ANM, GNM, and
              DGNM
            </span>
            <span className="d-block">
              <b>&#42; </b>Diploma in X-ray & ECG, Diploma in Dialysis
              Techniques, and Diploma in unani Pharmacy
            </span>
          </Col>
          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>Judiciary Program</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> BA LLB, BCom LLB, BBA LLB, LLB, LLM, PCSJ,and HJS
            </span>
          </Col>

          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>Engineering Program</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> B.Tech, M.Tech, BCA, MCA, and BSc.IT{" "}
            </span>
          </Col>

          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>Motivational Awareness Program</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> Conferences, Seminar, Camp, and Social media{" "}
            </span>
          </Col>

          <Col lg={12} className="mb-2">
            <p className="mb-0">
              <b>Student Conselling Program</b>
            </p>
            <span className="d-block">
              <b>&#42;</b> Lack of objective thinking leads students to not make
              independent dicisions{" "}
            </span>
            <span className="d-block">
              <b>&#42;</b> The main goal of our program is to help students
              become self-sufficient
            </span>
            <span className="d-block">
              <b>&#42;</b> Crafting future course of action through our
              scientific experience{" "}
            </span>
          </Col>

          <Col
            style={{ border: "none", gap: "13px" }}
            className="py-3 flex-wrap d-flex"
          >
            <a
              href={educationForm}
              target="_blank" // opens the link in a new tab/window
              rel="noopener noreferrer" // recommended for security reasons
              style={{ width: "300px",height: "40px",backgroundColor:"#54B4D3" }}
              className="border p-2  text-decoration-none text-white"
            >
           <FaAngleRight className="mb-1" /> EDUCATION FORM DOWNLOAD
            </a>
            <NavLink
              to={RouteConstant.EDUCATION_ONLINE_FORM}
              className=" border p-2 text-decoration-none" 
              style={{ width:"300px",backgroundColor:"#54B4D3",height: "40px",color: "white"}}
            >
              <FaAngleRight className="mb-1" /> EDUCATION FORM ONLINE
            </NavLink>
          </Col>
        </Row>

        <Container className="w-100%">
          <Review />
        </Container>
      </Container>
    </>
  );
};

export default Education;
