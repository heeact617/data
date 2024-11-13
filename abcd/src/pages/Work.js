import { useEffect, useState } from "react";

/* component import */
import Project from "./../components/Project";
import ToyProject from ".././components/ToyProject";
import Artwork from "./../components/Artwork";

/* css import */
import containerStyle from "./../styles/Container.module.css";
import style from "./../styles/Work.module.css";

function Work() {
  const [activeTab, setActiveTab] = useState("Project"); // 현재 활성화된 탭 상태
  const [isMobile, setIsMoblie] = useState(window.innerWidth <= 768); // 화면 크기에 따른 모바일 여부 상태
  const [isOpen, setIsOpen] = useState(false); // 모바일 메뉴 열림/닫힘 상태

  // 선택된 탭에 따라 해당 컴포넌트를 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "Project":
        return <Project />;
      case "Toy Project":
        return <ToyProject />;
      case "Artwork":
        return <Artwork />;
      default:
        return null;
    }
  };

  // 화면 크기 변경 시 모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMoblie(window.innerWidth <= 768);
    };
    // 초기 화면 크기 확인 및 resize 이벤트 등록
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 사라질 때 이벤트 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id={style.c_work}>
      <h3 className={containerStyle.content_title}>It's my works! 📁</h3>
      <div className={style.cinner}>
        <div className={`${style.cate_tab} ${isMobile ? style.is_mobile : ""}`}>
          {isMobile ? (
            <button
              className={`${style.tab_btn} ${isOpen ? style.is_open : ""}`}
              onClick={() => setIsOpen(!isOpen)} // 클릭 시 열림/닫힘 상태 토글
            >
              <span>{activeTab}</span>
            </button>
          ) : null}
          <div
            className={`${isMobile ? style.tab_wrap : ""} ${
              isOpen ? style.show : ""
            }`}
          >
            <ul>
              <li
                className={activeTab === "Project" ? style.active : ""}
                onClick={() => {
                  setActiveTab("Project");
                  setIsOpen(false);
                }}
              >
                <span>Project</span>
              </li>
              <li
                className={activeTab === "Toy Project" ? style.active : ""}
                onClick={() => {
                  setActiveTab("Toy Project");
                  setIsOpen(false);
                }}
              >
                <span>Toy Project</span>
              </li>
              <li
                className={activeTab === "Artwork" ? style.active : ""}
                onClick={() => {
                  setActiveTab("Artwork");
                  setIsOpen(false);
                }}
              >
                <span>Artwork</span>
              </li>
            </ul>
          </div>
        </div>
        <div id={style.cate_content}>{renderContent()}</div>
      </div>
    </div>
  );
}

export default Work;
