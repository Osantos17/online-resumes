import { ResumesIndex } from "./ResumesIndex"
import axios from "axios";
import { useState, useEffect } from "react"


export function Content() {

  // const [resumes, setResumes ] = useState ([]);

  // const handleIndexResumes = () => {
  //   axios.get("http://localhost:3000/FILLER.json").then((response) => {
  //   console.log(response.data);
  //   setResumes(response.data);
  //   });
  // };

  // useEffect(handleIndexResumes, []);

  return (
    <div>
      <ResumesIndex resumes={resumes}/>
    </div>
  )
}