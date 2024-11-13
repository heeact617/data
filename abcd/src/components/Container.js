import { Routes, Route, useLocation } from "react-router-dom";

/* component import */
import Home from "./../pages/Home";
import About from "./../pages/About";
import Work from "./../pages/Work";
import Contact from "./../pages/Contact";
import Blog from "./../pages/Blog";
/* css import */
import style from "./../styles/Container.module.css";

function Container() {
  const location = useLocation();

  // 현재 경로에 따라 페이지 타이틀 변경
  const getPageTitle = function (pathname) {
    switch (pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/work":
        return "Work";
      case "/contact":
        return "Contact";
      case "/blog":
        return "Blog";
      default:
        return "";
    }
  };
  return (
    <main id={style.container}>
      <div className={style.cnavi}>
        <h2 className={style.page_title}>{getPageTitle(location.pathname)}</h2>
        <ul className={style.page_link}>
          <li>
            <a href="https://heeccup.tistory.com/" target="_blank">
              BLOG
            </a>
          </li>
          <li>
            <a
              href="https://piquant-leo-829.notion.site/13dd759753a4802e8504c8bb70e6c1e3?pvs=4"
              target="_blank"
            >
              NOTION
            </a>
          </li>
        </ul>
      </div>
      <section id={style.contents}>
        <div className={style.cinner}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </div>
      </section>
    </main>
  );
}

export default Container;
