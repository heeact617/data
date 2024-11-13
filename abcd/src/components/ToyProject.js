import { useEffect, useState } from "react";
import axios from "axios";

/* component import */
import ProjectCard from "./ProjectCard";
/* css import */
import workStyle from "./../styles/Work.module.css";

function ToyProject() {
  const [toyProject, setToyPoject] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    axios
      .get("https://heeact617.github.io/myapi/portfolio-api/toyProject.json")
      .then((result) => {
        setToyPoject(result.data); // 가져온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("데이터를 불러오지 못했습니다:", error);
      });
  }, []);

  return (
    <div className={`${workStyle.work_grid} ${workStyle.col3}`}>
      {toyProject.map((item, index) => {
        return <ProjectCard project={item} key={index} />;
      })}
    </div>
  );
}

export default ToyProject;
