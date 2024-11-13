/* component import */
import EmailForm from "../components/EmailForm";

/* css import */
import containerStyle from "./../styles/Container.module.css";
import style from "./../styles/Contact.module.css";

function Contact() {
  return (
    <div id={style.c_contact}>
      <h3 className={containerStyle.content_title}>Keep in touch! 👋</h3>
      <ul className={style.contact_list}>
        <li>
          <p className={style.tit}>Email.</p>
          <a
            className={style.txt}
            href="mailto:heeact617@gmail.com"
            target="_blank"
          >
            heeact617@gmail.com
          </a>
        </li>
        <li>
          <p className={style.tit}>Github.</p>
          <a
            className={style.txt}
            href="https://github.com/heeact617"
            target="_blank"
          >
            jhee7610 github <span>🔗</span>
          </a>
        </li>
        <li>
          <p className={style.tit}>Notion.</p>
          <a
            className={style.txt}
            href="https://jhee7610.notion.site/ed66f8473a3443629ba5587a4213fbd6"
            target="_blank"
          >
            jung heejung notion <span>🔗</span>
          </a>
        </li>
      </ul>

      <EmailForm />
    </div>
  );
}

export default Contact;
