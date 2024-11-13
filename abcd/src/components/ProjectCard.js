import { useEffect, useState } from "react";

/* component import */
import PopupBtns from "./PopupBtns";
/* css import */
import style from "./../styles/ProjectCard.module.css";

function ProjectCard({ project }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupBtnOpen = () => {
    setIsPopupOpen(true); // 팝업 열기
  };
  const handlePopupBtnClose = () => {
    setIsPopupOpen(false); // 팝업 닫기
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }

    // 컴포넌트가 언마운트될 때 클래스 제거
    return () => {
      document.documentElement.classList.remove("lock");
      document.body.classList.remove("lock");
    };
  }, [isPopupOpen]);

  return (
    <div className={style.card}>
      <div className={style.img_wrap}>
        <img
          src={project.image}
          className={style.card_img}
          alt={project.description}
        />
        <div
          className={`${style.copy_tag} ${
            project.copy === "company" ? style.company : style.personal
          }`}
        >
          <span>{project.copy}</span>
        </div>
      </div>
      <div className={style.cont_wrap}>
        <p className={style.tit}>{project.title}</p>
        <p className={style.desc}>{project.description}</p>
        <p className={style.txt}>
          <span>제작기간</span>
          {project.period}
        </p>
        {project.contribution && (
          <p className={style.txt}>
            <span>기여도</span>
            {project.contribution}
          </p>
        )}

        <div className={style.tags_wrap}>
          {project.tags.map((item, index) => {
            return (
              <span className={style.tag} key={index}>
                #{item}
              </span>
            );
          })}
        </div>
        <div className={style.btns_wrap}>
          {project.report && (
            <a
              href={project.report}
              className={`${style.btn} ${style.btn_w1} ${style.report}`}
              target="_blank"
            >
              프로젝트 기술서
            </a>
          )}
          {Array.isArray(project.site)
            ? project.site && (
                <button
                  onClick={handlePopupBtnOpen}
                  className={`${style.btn} ${style.btn_w1} ${style.site}`}
                >
                  VIEW MORE
                </button>
              )
            : project.site && (
                <a
                  href={project.site}
                  className={`${style.btn} ${style.btn_w1} ${style.site}`}
                  target="_blank"
                >
                  VIEW SITE
                </a>
              )}
          {project.state && (
            <a
              href="#"
              className={`${style.btn} ${style.btn_w1} ${style.close}`}
              onClick={(e) => e.preventDefault()}
            >
              운영 종료
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className={`${style.btn} ${style.btn_w2} ${style.demo}`}
              target="_blank"
            >
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className={`${style.btn} ${style.btn_w2} ${style.github}`}
              target="_blank"
            >
              Github
            </a>
          )}
          {project.review && (
            <a
              href={project.review}
              className={`${style.btn} ${style.btn_w1} ${style.review}`}
              target="_blank"
            >
              프로젝트 제작기
            </a>
          )}
        </div>
      </div>

      {isPopupOpen && (
        <PopupBtns
          project={project}
          site={project.site}
          onClose={handlePopupBtnClose}
        />
      )}
    </div>
  );
}

export default ProjectCard;
