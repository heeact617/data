import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* css import */
import style from "./../styles/Header.module.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100);
  };

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
    setIsVisible(false);
  }, [location.pathname]);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }
  });

  return (
    <header id={style.header}>
      <div className={style.header_content}>
        <div className={style.hinner}>
          <h1 className={style.hlogo}>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="Hee-jung Portfolio"
              />
            </Link>
          </h1>
          <button
            type="button"
            className={`${style.nav_btn} ${style.nav_btn_open}`}
            onClick={toggleMenu}
          >
            <span className="blind">전체메뉴</span>
          </button>
          <nav
            className={`${style.main_nav} ${
              isVisible ? style.is_visible : ""
            } ${isOpen ? style.is_open : ""} `}
          >
            <div className={style.main_nav_header}>
              <div className={style.header_profile}>
                <div
                  className={style.img}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  <span className="blind">프로필 사진</span>
                </div>
                <ul className={style.page_link}>
                  <li>
                    <a href="https://heeccup.tistory.com/" target="_blank">
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jhee7610.notion.site/ed66f8473a3443629ba5587a4213fbd6"
                      target="_blank"
                    >
                      NOTION
                    </a>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className={`${style.nav_btn} ${style.nav_btn_close}`}
                onClick={toggleMenu}
              >
                <span className="blind">전체메뉴 닫기</span>
              </button>
            </div>
            <div className={style.main_nav__depth1}>
              <ul className={style.mn_ul1}>
                <li
                  className={`${style.mn_li1} ${
                    location.pathname === "/" ? style.active : ""
                  }`}
                >
                  <Link to="/" className={style.mn_a1}>
                    <span className={`${style.mn_s1} ${style.ico1}`}>Home</span>
                  </Link>
                </li>
                <li
                  className={`${style.mn_li1} ${
                    location.pathname === "/about" ? style.active : ""
                  }`}
                >
                  <Link to="/about" className={style.mn_a1}>
                    <span className={`${style.mn_s1} ${style.ico2}`}>
                      About
                    </span>
                  </Link>
                </li>
                <li
                  className={`${style.mn_li1} ${
                    location.pathname === "/work" ? style.active : ""
                  }`}
                >
                  <Link to="/work" className={style.mn_a1}>
                    <span className={`${style.mn_s1} ${style.ico3}`}>Work</span>
                  </Link>
                </li>
                <li
                  className={`${style.mn_li1} ${
                    location.pathname === "/contact" ? style.active : ""
                  }`}
                >
                  <Link to="/contact" className={style.mn_a1}>
                    <span className={`${style.mn_s1} ${style.ico4}`}>
                      Contact
                    </span>
                  </Link>
                </li>
                <li
                  className={`${style.mn_li1} ${
                    location.pathname === "/blog" ? style.active : ""
                  }`}
                >
                  <Link to="/blog" className={style.mn_a1}>
                    <span className={`${style.mn_s1} ${style.ico5}`}>Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className={`${style.hedaer_nav_bg} ${isOpen ? style.show : ""} ${
            isOpen ? style.is_visible : ""
          }`}
        ></div>
      </div>

      <div className={style.header_profile}>
        <div className={style.hinner}>
          <div
            className={style.img}
            onClick={() => {
              navigate("/about");
            }}
          >
            <span className="blind">프로필 사진</span>
          </div>
          <div className={style.cont}>
            <p className={style.name}>Heejung Jung</p>
            <p className={style.email}>heeact617@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
