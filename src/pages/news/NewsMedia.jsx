import style from './News.module.scss';
import newsDoneImg from "../../assets/news-done-.jpg";
import { Container } from 'react-bootstrap';
const NewsMedia = () => {
  return (
   <>
    <div className={style.news_section}>
          <img src={newsDoneImg} alt="" />
      <Container>
      <div className={style.news_text}>
    <h1> News & Media</h1>
    <p>Our News & Media team believes in exchanging information especially when the cause is as noble as this one. Please feel free to get in touch with us by sending us an email to <span>newsmedia.asw@gmail.com</span></p>
      </div>
      </Container>
    </div>
   </>
  )
}

export default NewsMedia
