import { blogs } from "./blogData";
import style from "./Blog.module.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";

function BlogList() {
  const [allDescriptions, setAllDescriptions] = useState(false);
  const [blogPath, setBlogPath] = useState(null);

  const navigate = useNavigate();
  function readmoreHandler() {
    setAllDescriptions(!allDescriptions);
  }

  const handlerBlogClick = (item) => {
    setBlogPath(item);
  };
  useEffect(() => {
    if (blogPath !== null) {
      navigate(`/blog/detail/${blogPath}`);
    }
  }, [blogPath, navigate]);

  return (
    <>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-charity-event-twitch-banner_23-2149404991.jpg?w=1380&t=st=1701507217~exp=1701507817~hmac=1ced3dede73e7edd971e56edfd1681a5a9f0459c9753fa1f6da45db9ba1291bd"
        className="w-100"
        alt="Blog Banner"
      />
      <br />
      <br />
      <Container>
        <Row>
          {blogs.map((item) => (
            <Col
              lg={3}
              key={item.id}
              onClick={() => handlerBlogClick(item.path)}
              className="p-2"
            >
              <Card className={style.blog}>
                <NavLink
                  to={`/blog/detail/${item.path}`}
                  className={style.blogImg}
                >
                  <Card.Img
                    variant="top"
                    src={item.image.url}
                    alt={item.image.alt}
                    // className="imageBlog"
                    style={{height:'180px',}}
                  />
                  <Card.Text className={style.publishedDate}>
                    <CgCalendarDates className={style.dateIcon} />{" "}
                    {item.published_date}
                  </Card.Text>
                </NavLink>

                <Card.Body onClick={readmoreHandler}>
                  <Card.Title
                    className={style.blog_title}
                    style={{ textAlign: "justify" }}
                  >
                    <b>{item.title}</b>
                  </Card.Title>
                  <Card.Text className={style.description_all_text}>
                    {allDescriptions
                      ? item.description1
                      : item.description1.substring(0, 200)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default BlogList;
