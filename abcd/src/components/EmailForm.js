import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

/* css import */
import containerStyle from "./../styles/Container.module.css";
import style from "./../styles/EmailForm.module.css";

function EmailForm() {
  const form = useRef();
  const [popupMsg, setPopupMsg] = useState([{ msssage: "", state: null }]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n77ded3", "template_quldvqw", form.current, {
        publicKey: "IFKW__7j7F1ak3iFa",
      })
      .then(
        () => {
          setPopupMsg({ message: "메일이 전송되었습니다!", state: true });
          setIsPopupVisible(true);
        },
        (error) => {
          setPopupMsg({ message: "메일 전송을 실패했습니다.", state: false });
          setIsPopupVisible(true);
        }
      );
  };

  // 팝업 닫기 버튼 핸들러
  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupMsg({ message: "", state: null }); // 초기화
    // 폼 데이터 초기화
    form.current.reset();
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }

    // 컴포넌트가 언마운트될 때 클래스 제거
    return () => {
      document.documentElement.classList.remove("lock");
      document.body.classList.remove("lock");
    };
  }, [isPopupVisible]);

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <h3 className={containerStyle.content_title}>Send Email 📧</h3>
        <div className={style.emailform_wrap}>
          <div className={style.emailform_cont}>
            <div className={style.emailform_item}>
              <label for="from_name">NAME</label>
              <input
                type="text"
                name="from_name"
                placeholder="이름을 입력해 주세요."
                required
              />
            </div>
            <div className={style.emailform_item}>
              <label for="email">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요."
                required
              />
            </div>
            <div className={style.emailform_item}>
              <label for="subject">SUBJECT</label>
              <input
                type="text"
                name="subject"
                placeholder="제목을 입력해 주세요."
                required
              />
            </div>
          </div>
          <div className={style.emailform_cont}>
            <div className={style.emailform_item}>
              <label for="message">MESSAGE</label>
              <textarea
                name="message"
                placeholder="내용을 입력해 주세요."
                required
              />
            </div>
            <input type="submit" value="SEND!" className={style.btn_submit} />
          </div>
        </div>
        <p className={style.emailform_txt}>
          메일을 보내 주시면 빠른 시일 내 확인 후 회신드리겠습니다. 🙂
        </p>
      </form>

      {isPopupVisible && (
        <div className={style.popup_bg}>
          <div className={style.popup_inner}>
            <button onClick={closePopup} className={style.btn_close}>
              <span>닫기</span>
            </button>
            <div className={style.popup_content}>
              <p
                className={`${style.txt} ${
                  popupMsg.state ? style.success : style.error
                }`}
              >
                {popupMsg.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmailForm;
