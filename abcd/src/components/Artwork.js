import { useState, useEffect } from "react";
import axios from "axios";
/* react-photo-album, yet-another-react-lightbox */
import Lightbox from "yet-another-react-lightbox";
import { MasonryPhotoAlbum } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
/* css import */
import style from "./../styles/Artwork.module.css";

function Artwork() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState(getColumns());

  // 화면 크기에 따라 columns 수 반환하는 함수
  function getColumns() {
    if (window.innerWidth > 1400) return 5;
    if (window.innerWidth > 1200) return 4;
    if (window.innerWidth > 640) return 3;
    return 2;
  }
  // 창 크기 변경 시 columns 값을 업데이트
  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get("https://heeact617.github.io/myapi/portfolio-api/artwork.json")
      .then((result) => {
        setPhotos(result.data);
      })
      .catch((error) => {
        console.error("데이터를 불러오지 못했습니다:", error);
      });
  }, []);

  return (
    <div className={style.artwork_content}>
      <MasonryPhotoAlbum
        photos={photos}
        columns={columns}
        spacing={20}
        onClick={({ index: current }) => setIndex(current)}
        render={{
          button: (props) => <button {...props} />,
          image: (props) => (
            <>
              <img {...props} alt={props.title} />
              <div
                className={`${style.copy_tag} ${
                  props.alt === "company" ? style.company : style.personal
                }`}
              >
                <span>{props.alt}</span>
                {console.log(props)}
              </div>
              <div className={style.title_wrap}>
                <p className={style.title}>{props.title}</p>
              </div>
            </>
          ),
        }}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions]}
      />
    </div>
  );
}

export default Artwork;
