import styles from "./Education.module.scss";
import edusbannerImg from "../../assets/edusbanner.jpg";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RouteConstant } from "../../shared/constants/route";
import educationForm from "../../assets/pdf/education-form.pdf";
import Review from "../../shared/recentCausesSliders/Review";
import { FaAngleRight } from "react-icons/fa6";
import { educationreviewslider, sliderheading } from "./educationsliders";
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const Education = () => {
  return (
    <>
      <img src={edusbannerImg} alt="educationimg" className={styles.education_image} />
      <Container>
        <h2 className={styles.education_heading}>
          <strong>EDUCATION</strong>
        </h2>
        <Row>
          <Col lg={12} className={styles.paragraph_text}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
          <Col lg={12} className={styles.paragraph_text}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
          <Col lg={12} className={styles.paragraph_text}>
            The one factor that pulls nations from the abyss of darkness is by
            providing education to its citizens. The easier it could be accessed
            and acquired, the faster the nation progresses. We acknowledge that
            not only education helps an individual to earn a living but it also
            lets citizens know about their fundamental rights and duties that
            eventually transforms societies from strength to strength.
          </Col>
        </Row>

        <Row>
        <Col lg={12} className={styles.program_heading}>
            <h2 className="text-center mb-3">
              <strong>OUR PROGRAMS</strong>
            </h2>
          </Col>

          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>Judiciary Program</p>
                    <hr />
                    <ul>
                      <li>BA LLB</li>
                      <li>BCom LLB</li>
                      <li>BBA LLB</li>
                      <li>LLB</li>
                      <li>LLM</li>
                      <li>PCSJ</li>
                      <li>HJS</li>
                    </ul>
              </div>
          </Col>
          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>Engineering Program</p>
                    <hr />
                    <ul>
                      <li>B.Tech</li>
                      <li>M.Tech</li>
                      <li>BCA</li>
                      <li>MCA</li>
                      <li>BSc.IT</li>
                    </ul>
              </div>
          </Col>

          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>Motivational Awareness Program</p>
                    <hr />
                    <ul>
                      <li>Conferences</li>
                      <li>Seminar</li>
                      <li>Camp</li>
                      <li>Social media</li>
                    </ul>
              </div>
          </Col>


          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>UPSC Preparation support program</p>
                    <hr />
                    <ul>
                      <li>IAS</li>
                      <li>IPS</li>
                      <li>IRS</li>
                      <li>IFS</li>
                    </ul>
              </div>
          </Col>

          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>Medical Program</p>
                    <hr />
                    <ul>
                      <li>MBBS</li>
                      <li>BDS</li>
                      <li>BAMS</li>
                      <li>BUMS</li>
                      <li>BHMS</li>
                      <li>MD</li>
                      <li>MS</li>
                      <li>BVSc</li>    
                      <li>BSMS</li>
                      <li>BNYS</li>
                      <li>BPT</li>
                      <li>BMLT</li>
                      <li>DMLT</li>
                      <li>BOPT</li>
                      <li>BCLT</li>
                      <li>BDT</li>
                      <li>ANM</li>
                      <li>GNM</li>
                      <li>BMIT</li>
                      <li>BOTT</li>
                      <li>ECG</li>
                      <li>DGNM</li>
                      <li>B.Pharma</li>
                      <li>D.Pharma</li>
                      <li>BSc Occupational Therapy</li>
                      <li>BSc Nursing</li>
                      <li>Diploma in Dialysis Techniques</li>
                      <li>Diploma in unani Pharmacy</li>
                      <li>Diploma in X-ray</li> 
                    </ul>
              </div>
          </Col>

          <Col lg={6} md={6} xs={12} sm={6} className="mb-3">
              <div className={styles.debit_card}>
                    <p>Recherche and training program</p>
                    <hr />
                    <ul>
                      <li>IAS</li>
                      <li>IPS</li>
                      <li>IRS</li>
                      <li>IFS</li>
                    </ul>
              </div>
          </Col>


        </Row>

        <Row className="mt-3">
          <Col lg={12} className="mb-3">
          <div className={styles.debit_card} >
                    <p>Student Counselling Program</p>
                    <hr />
                    <ul>
                      <li>Lack of objective thinking leads students to not make independent decisions</li>
                      <li>The main goal of our program is to help students become self-sufficient</li>
                      <li>Crafting future course of action through our scientific experience</li>
                    </ul>
              </div>
          </Col>
        </Row>

        <Row className={styles.cource_details}>
          

         
          <Col lg={12}></Col>
          <Col
            style={{ border: "none", gap: "13px" }}
            className="py-3 flex-wrap d-flex"
          >
            <a
              href={educationForm}
              target="_blank" // opens the link in a new tab/window
              rel="noopener noreferrer" // recommended for security reasons
              style={{
                width: "300px",
                height: "40px",
                backgroundColor: "#54B4D3",
              }}
              className="border p-2  text-decoration-none text-white"
            >
              <FaAngleRight className="mb-1" /> EDUCATION FORM DOWNLOAD
            </a>
            <NavLink
              to={RouteConstant.EDUCATION_ONLINE_FORM}
              className=" border p-2 text-decoration-none"
              style={{
                width: "300px",
                backgroundColor: "#54B4D3",
                height: "40px",
                color: "white",
              }}
            >
              <FaAngleRight className="mb-1" /> EDUCATION FORM ONLINE
            </NavLink>
          </Col>
        </Row>
        <Container className="w-100%">
          <Review text={sliderheading} sliderImg={educationreviewslider} />
        </Container>
      </Container>
    </>
  );
};

export default Education;
