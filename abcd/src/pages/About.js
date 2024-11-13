/* css import */
import containerStyle from "./../styles/Container.module.css";
import style from "./../styles/About.module.css";

function About() {
  return (
    <div id={style.c_about}>
      <h3 className={containerStyle.content_title}> My Profile 👀</h3>
      <div className={style.cinner}>
        <div id={style.main_info}>
          <div className={style.profile_pic}>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile_pic.png`}
              alt="프로필 사진"
            />
          </div>
          <div className={style.minfo_cont}>
            <h4 className={style.minfo_title}>Main Info.</h4>
            <ul className={style.minfo_list}>
              <li>
                <p className={style.tag_title}>NAME</p>
                <p className={style.tag_cont}>정희정</p>
              </li>
              <li>
                <p className={style.tag_title}>POSITION</p>
                <p className={style.tag_cont}>웹 퍼블리셔</p>
              </li>
              <li>
                <p className={style.tag_title}>MAIL</p>
                <p className={style.tag_cont}>heeact617@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div id={style.main_cont}>
          <div className={style.info_sec}>
            <h4 className={style.info_title}>자기소개</h4>
            <div className={`${style.info_cont} ${style.intro_box}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={style.info_sec}>
            <h4 className={style.info_title}>스킬</h4>
            <div className={style.skill_box}>
              <ul>
                <li>
                  <p className={style.tit}>Photoshop</p>
                  <p className={style.txt}>
                    기본 툴을 이용한 이미지 편집, 보정, UI/UX를 고려한 디자인이
                    가능합니다.
                  </p>
                </li>
                <li>
                  <p className={style.tit}>Illustrator</p>
                  <p className={style.txt}>
                    아이콘 제작 등 벡터 소스 제작, 편집, UI/UX를 고려한 디자인이
                    가능합니다.
                  </p>
                </li>
                <li>
                  <p className={style.tit}>HTML/CSS</p>
                  <p className={style.txt}>
                    웹표준, 웹접근성에 맞는 마크업 구현, 반응형, 모바일 웹페이지
                    제작 가능합니다.
                  </p>
                </li>
                <li>
                  <p className={style.tit}>JavaScript</p>
                  <p className={style.txt}>
                    기본적인 JavaScript 문법을 이해하고, jQuery 라이브러리를
                    활용해 간단한 기능 구현 및 코드 수정이 가능합니다.
                  </p>
                </li>
                <li>
                  <p className={style.tit}>React</p>
                  <p className={style.txt}>
                    기본적인 개념(컴포넌트, JSX, Hooks 등)을 이해하고 있으며,
                    간단한 프로젝트를 구현한 경험이 있습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.info_sec}>
            <h4 className={style.info_title}>경력</h4>
            <div className={style.career_box}>
              <ul className={`${style.list} ${style.col1}`}>
                <li>
                  <span className={style.icon}>경력 아이콘</span>
                  <div className={style.cont_box}>
                    <div className={style.txt_box}>
                      <p className={style.tit}>제스아이앤씨</p>
                      <p className={style.txt}>UI/UX팀 퍼블리셔</p>
                    </div>
                    <div className={style.date_box}>
                      <p className={style.tit}>2023.04 - 2024.02</p>
                      <p className={style.txt}>10개월</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className={style.icon}>경력 아이콘</span>
                  <div className={style.cont_box}>
                    <div className={style.txt_box}>
                      <p className={style.tit}>더 세인 주식회사</p>
                      <p className={style.txt}>디자인팀 웹디자인/퍼블리싱</p>
                    </div>
                    <div className={style.date_box}>
                      <p className={style.tit}>2020.10 - 2022.08</p>
                      <p className={style.txt}>1년 10개월</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.info_sec}>
            <h4 className={style.info_title}>교육</h4>
            <div className={style.edu_box}>
              <ul className={`${style.list} ${style.col1}`}>
                <li>
                  <span className={style.icon}>교육 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>
                      디지털디자인 UI/UX 웹디자인(웹퍼블리셔) NCS 과정수료
                    </p>
                    <p className={style.txt}>2020.02 - 2020.07</p>
                  </div>
                </li>
                <li>
                  <span className={style.icon}>교육 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>APM기반의 웹 개발 입문</p>
                    <p className={style.txt}>2017.01 - 2017.08</p>
                  </div>
                </li>
                <li>
                  <span className={style.icon}>경력 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>경성대학교 전자공학과 졸업</p>
                    <p className={style.txt}>2017.02</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.info_sec}>
            <h4 className={style.info_title}>자격증</h4>
            <div className={style.certif_box}>
              <ul className={`${style.list} ${style.col2}`}>
                <li>
                  <span className={style.icon}>자격증 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>웹디자인기능사</p>
                    <p className={style.txt}>2018.12</p>
                  </div>
                </li>
                <li>
                  <span className={style.icon}>자격증 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>GTQ그래픽기술자격 1급</p>
                    <p className={style.txt}>2018.11</p>
                  </div>
                </li>
                <li>
                  <span className={style.icon}>자격증 아이콘</span>
                  <div className={style.txt_box}>
                    <p className={style.tit}>컴퓨터활용능력 1급</p>
                    <p className={style.txt}>2017.10</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
