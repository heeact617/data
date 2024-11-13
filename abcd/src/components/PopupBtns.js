/* css import */
import style from "./../styles/PopupBtns.module.css";

function PopupBtns({ project, site, onClose }) {
  return (
    <div className={style.popup_bg}>
      <div className={style.popup_inner}>
        <button onClick={onClose} className={style.btn_close}>
          <span>닫기</span>
        </button>
        <div className={style.popup_content}>
          <h4 className={style.tit}>{project.title}</h4>
          <p className={style.txt}>제작기간 / {project.period} </p>
          <ul className={style.btns_list}>
            {site.map((site, index) => {
              return (
                <>
                  {site.url1 && (
                    <li key={index}>
                      <a href={site.url1} className={style.btn} target="_blank">
                        기획서
                      </a>
                    </li>
                  )}
                  {site.url2 && (
                    <li key={index}>
                      <a href={site.url2} className={style.btn} target="_blank">
                        MAIN
                      </a>
                    </li>
                  )}
                  {site.url3 && (
                    <li key={index}>
                      <a href={site.url3} className={style.btn} target="_blank">
                        SUB1
                      </a>
                    </li>
                  )}
                  {site.url4 && (
                    <li key={index}>
                      <a href={site.url4} className={style.btn} target="_blank">
                        SUB2
                      </a>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopupBtns;
