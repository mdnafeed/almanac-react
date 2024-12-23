import { blogs } from "./blogData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import style from "./Blog.module.scss";
import logo_icon from "../../assets/logo.png";
function Detail() {
  const { path } = useParams();
  const data = blogs.find((blog) => blog.path === path);
  return (
    <>
      <Container>
        <Row className="py-4">
          <Col className={style.all_description}>
            <Card.Body className="p-2">
              
              <h2 className={style.blogTile}>{data.title}</h2>
              <Card.Title
                className="font-weight-bold"
                atyle={{ fontSize: "18px" }}
              >
                {data.tilte2}
              </Card.Title>
              <Card.Title className="py-2 font-weight-bold">
                {data.titel3}
              </Card.Title>
              <Card.Text>{data.description1}</Card.Text>
              <Card.Text>{data.description2}</Card.Text>
              <Card.Text>{data.description3}</Card.Text>
              <Card.Text>{data.description4}</Card.Text>
              <Card.Text>{data.description5}</Card.Text>
              <Card.Text>{data.description6}</Card.Text>
              <Card.Text>{data.description7}</Card.Text>
              <Card.Text>{data.description8}</Card.Text>
              <Card.Text>{data.description9}</Card.Text>
              <Col className={style.tag} style={{float:'right'}}>
                Tags:<Card.Title className={style.tagName}>
                {data.tagName}
                </Card.Title>
              </Col>
              <img src={logo_icon} style={{height: '100px',marginBottom:"11px"}}/>
              <Card.Title className={style.author}>
                <p style={{margin:'0'}}>{data.authorName}</p> 
                <p style={{margin:'0'}}>{data.authorDesignation}</p>
                <p style={{margin:'0'}}>{data.authorCompanyName}</p>
                </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Detail;
