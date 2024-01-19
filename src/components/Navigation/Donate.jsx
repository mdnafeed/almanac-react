import style from "./Donate.module.css";

import donateImg from "../../assets/donate.jpg";

const Donate = () => {
  return (
    <div className={style.donate_details}>
      <img src={donateImg} alt="" />

      <div className={style.donate_text}>
        <div className={style.donate_card}>
          <div className={style.donate_card_details}>
            <div className={style.donate_card_details_text}>
              <h1>Donate Online</h1>
              <p>Please click on the link to make your donation online</p>
            </div>
            <div className={style.donate_card_now}>
              <h1>DONATE NOW</h1>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Donate by Cheque</h1>
            <p>
              You can make a donation by email in the form of a personal cheque
              made payable to Almanac Social Welfare
            </p>
            <p>Almanac Social Welfare</p>
            <p>Registered Office:</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
