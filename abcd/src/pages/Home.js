import { useNavigate } from "react-router-dom";

/* css import */
import style from "./../styles/Home.module.css";

function Home() {
  let navigate = useNavigate();
  return (
    <div id={style.c_home}>
      <div className={style.main_text}>
        <h3>Welcome to my page!</h3>
        <p>
          Crafting seamless digital experiences, one line of code at a time.{" "}
          <span className="line_br">I am a web publisher.</span>
        </p>
        <ul className={style.link_list}>
          <li>
            <p>View Works</p>
            <button
              onClick={() => {
                navigate("/work");
              }}
            >
              <span className="blind">works 바로가기 버튼</span>
            </button>
          </li>
          <li>
            <p>Contact me!</p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
            >
              <span className="blind">contact 바로가기 버튼</span>
            </button>
          </li>
        </ul>
      </div>
      <div className={style.alert_text}>
        <p>
          해당 사이트는 개인 포트폴리오 용도로 제작되어 상업적 목적이 없음을
          밝힙니다.
        </p>
      </div>
    </div>
  );
}

export default Home;
