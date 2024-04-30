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
        <br />
        <Row>
          <Col lg={12} className={styles.program_heading}>
            <h2 className="text-center mb-4">
              <strong className={styles.planForAction}>Plan of Action</strong>
            </h2>
          </Col>

          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div className={styles.borderHight}>
                  <h5><strong>Research & Training Program</strong></h5>
                  <p className="mb-0">Ph.D (Biotechnology, Biochemistry, Botany, Clinical Research, Forensic Research & Others.)</p>
                  <p className="mb-0">MSc Dissertation & Summer Training.</p>
                  <p className="mb-0">Bachelor Training </p>
                  {/* <p className="mb-0">IFS</p> */}
                  
              </div> 
          </Col>
           
          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div className={styles.borderHight}>
                  <h5><strong>UPSC Preparation Support Program</strong></h5>
                  <p className="mb-0">Indian Administrative Service (IAS)</p>
                  <p className="mb-0">Indian Police Service (IPS)</p>
                  <p className="mb-0">Internal Revenue Service (IRS)</p>
                  <p className="mb-0">Indian Forest Service (IFS)</p>
              </div> 
          </Col>
          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div>
                  <h5><strong>Judiciary Program</strong></h5>
                  <p className="mb-0">B.A, B.Com, BBA - LLB Integrated Course </p>
                  {/* <p className="mb-0"> - LLB Integrated Course</p> */}
                  {/* <p className="mb-0">BBA - LLB Integrated Course</p> */}
                  <p className="mb-0">Bachelor of Laws (LLB)</p>
                  {/* <p className="mb-0">BCom LLB</p> */}
                  <p className="mb-0">Master of Laws (LL.M) </p>
                  <p className="mb-0">PCS (J) & HJS</p>
                  {/* <p className="mb-0">HJS </p> */}
              </div> 
          </Col>

          <br/>

          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div className={styles.borderHight}>
                  <h5><strong>Medical Program</strong></h5>
                  <p className="mb-0">
                        MBBS, BDS, BAMS, BUMS, BHMS, MD, MS, BPT, BMLT, DMLT, ANM, GNM, B.Pharma, D.Pharma, BSc Nursing Diploma (Dialysis, Unani Pharmacy, X-Ray & ECG, and Operation Theatre)
                  </p>
                  
              </div> 
          </Col>
           
          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div className={styles.borderHight}>
                  <h5><strong>Engineering Program</strong></h5>
                  <p className="mb-0">Bachelor of Technology (B.Tech)</p>
                  <p className="mb-0">Master of Technology (M.Tech)</p>
                  <p className="mb-0">Bachelor of Computer Application (BCA)</p>
                  <p className="mb-0">Master of Computer Application (MCA)</p>
              </div> 
          </Col>
          <Col lg={4} md={4} xs={12} sm={4} className="mb-3">
              <div>
                  <h5><strong>Motivational Awareness Program</strong></h5>
                  <p className="mb-0">Conferences</p>
                  <p className="mb-0">Seminar Camp</p>
                  <p className="mb-0">Camp</p>
                  <p className="mb-0">Social media</p>
                  
              </div> 
          </Col>

        </Row>
        <Row>
        {/* <Col lg={12} className={styles.program_heading}>
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
                    <p>Research and training program</p>
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
          </Col> */}
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
                backgroundColor: "#80e36a",
                borderRadius:"13px"
              }}
              className="border p-2 text-dark text-decoration-none "
            >
              <FaAngleRight className="mb-1" /> E FORM DOWNLOAD
            </a>
            <NavLink
              to={RouteConstant.EDUCATION_ONLINE_FORM}
              className=" border p-2 text-dark text-decoration-none"
              style={{
                width: "300px",
                backgroundColor: "#80e36a",
                height: "40px",
                color: "white",
                borderRadius:"13px"
              }}
            >
              <FaAngleRight className="mb-1" /> E FORM ONLINE
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
