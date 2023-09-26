import { ResumesIndex } from "./ResumesIndex"
import axios from "axios";
import { useState, useEffect } from "react"
import { Modal } from "./Modal";
import { ResumeShow } from "./ResumeShow"


export function Content() {

  const [resumes, setResumes ] = useState ([]);
  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState ({})


  const handleIndexResumes = () => {
    axios.get("http://localhost:3000/FILLER.json").then((response) => {
    console.log(response.data);
    setResumes(response.data);
    });
  };

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };


  const handleClose = () => {
    console.log("hanldeClose");
    setIsResumesShowVisible(false);
  };
  
  useEffect(handleIndexResumes, []);

  return (
    <div>
      <ResumesIndex resumes={resumes} onShowResume={handleShowResume}/>
      <Modal show ={isResumesShowVisible} onClose={handleClose}>
        <ResumeShow resume ={currentResume} />
      </Modal>
    </div>
  )
}