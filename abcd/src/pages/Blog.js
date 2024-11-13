import { useEffect, useState } from "react";
import axios from "axios";
// import { parseString } from "xml2js";

/* css import */
import containerStyle from "./../styles/Container.module.css";
import style from "./../styles/Blog.module.css";

function Blog() {
  const [post, setPost] = useState([]);

  const encodedUrl = encodeURIComponent("https://heeccup.tistory.com/rss");
  const extractThumbnail = (content) => {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : "";
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodedUrl}`
        );
        const postsWithThumbnails = result.data.items.map((item) => ({
          ...item,
          thumbnail: extractThumbnail(item.content),
        }));
        console.log("Data loaded successfully: ", result.data.items);
        setPost(postsWithThumbnails);
      } catch (error) {
        console.error("Data load failed", error);
      }
    };
    getData();
  }, []);

  return (
    <div id={style.c_blog}>
      <h3 className={containerStyle.content_title}>
        Recent posts on the blog 📚
      </h3>
      <div className={style.post_wrap}>
        {post.map((item, index) => {
          return (
            <div key={index} className={style.post_item}>
              <a href={item.link} target="_blank">
                <div className={style.thumbnail}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className={style.cont_wrap}>
                  <p className={style.cate}>
                    <span>{item.categories}</span>
                  </p>
                  <p className={style.tit}>{item.title}</p>

                  <p className={style.date}>{item.pubDate}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
