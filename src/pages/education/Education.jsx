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
        <Row className={styles.cource_details}>
          <Col lg={12} className={styles.program_heading}>
            <h2 className="text-center">
              <strong>OUR PROGRAMS</strong>
            </h2>
          </Col>
          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>Judiciary Program</strong></Card.Title>
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>BA LLB</div>
                  <div className={styles.stackIitem}>BCom LLB</div>
                  <div className={styles.stackIitem}>BBA LLB</div>
                  <div className={styles.stackIitem}>LLB</div>
                  <div className={styles.stackIitem}>LLM</div>
                  <div className={styles.stackIitem}>PCSJ</div>
                  <div className={styles.stackIitem}>HJS</div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>Engineering Program</strong></Card.Title>
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>B.Tech</div>
                  <div className={styles.stackIitem}>M.Tech</div>
                  <div className={styles.stackIitem}>BCA</div>
                  <div className={styles.stackIitem}>MCA</div>
                  <div className={styles.stackIitem}>BSc.IT</div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>


          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>Motivational Awareness Program</strong></Card.Title>
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>Conferences</div>
                  <div className={styles.stackIitem}>Seminar</div>
                  <div className={styles.stackIitem}>Camp</div>
                  <div className={styles.stackIitem}>Social media</div>
                </Stack>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>UPSC Preparation support program</strong></Card.Title>
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>IAS</div>
                  <div className={styles.stackIitem}>IPS</div>
                  <div className={styles.stackIitem}>IRS</div>
                  <div className={styles.stackIitem}>IFS</div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>Medical Program</strong></Card.Title>
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>MBBS</div>
                  <div className={styles.stackIitem}>BDS</div>
                  <div className={styles.stackIitem}>BAMS</div>
                  <div className={styles.stackIitem}>BUMS</div>
                  <div className={styles.stackIitem}>BHMS</div>
                  <div className={styles.stackIitem}>MD</div>
                  <div className={styles.stackIitem}>MS</div>
                  <div className={styles.stackIitem}>BVSc</div>
                  <div className={styles.stackIitem}>BSMS</div>
                </Stack>
                <br />
                <Stack direction="horizontal" gap={3}>
                <div className={styles.stackIitem}>BNYS</div>
                  <div className={styles.stackIitem}>BPT</div>
                  <div className={styles.stackIitem}>BMLT</div>
                  <div className={styles.stackIitem}>DMLT</div>
                  <div className={styles.stackIitem}>BOPT</div>
                  <div className={styles.stackIitem}>BCLT</div>
                  <div className={styles.stackIitem}>BDT</div>
                  <div className={styles.stackIitem}>ANM</div>
                  <div className={styles.stackIitem}>GNM</div>
                </Stack>
                
                <br />
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>BMIT</div>
                  <div className={styles.stackIitem}>BOTT</div>
                  <div className={styles.stackIitem}>ECG</div>
                  <div className={styles.stackIitem}>DGNM</div>
                  <div className={styles.stackIitem}>B.Pharma</div>
                  <div className={styles.stackIitem}>D.Pharma</div>
                  <div className={styles.stackIitem}>BSc Nursing</div>
                </Stack>

               <br />

                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>Diploma in X-ray</div>
                  <div className={styles.stackIitem}>BSc Occupational Therapy</div>
                </Stack>

                <br />
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>Diploma in Dialysis Techniques</div>
                  <div className={styles.stackIitem}>Diploma in unani Pharmacy</div>
                </Stack>


              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-3">
            <Card border="success">
              <Card.Body>
                <Card.Title className="mb-3"><strong>Student Counselling Program</strong></Card.Title>

                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>Lack of objective thinking leads students to not make
                    independent decisions</div>
                </Stack>
                <br />
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>The main goal of our program is to help students
                    become self-sufficient</div>
                </Stack>
                <br />
                <Stack direction="horizontal" gap={3}>
                  <div className={styles.stackIitem}>Crafting future course of action through our
                    scientific experience</div>
                </Stack>
                
              </Card.Body>
            </Card>
          </Col>
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
