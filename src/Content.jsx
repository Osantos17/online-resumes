import { ResumesIndex } from "./ResumesIndex"
import axios from "axios";
import { useState, useEffect } from "react"
import { Modal } from "./Modal";
import { ResumeShow } from "./ResumeShow"


export function Content() {

  const [students, setStudents ] = useState ([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState ({})


  const handleIndexStudents = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
    console.log(response.data);
    setStudents(response.data);
    });
  };

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };


  const handleClose = () => {
    console.log("hanldeClose");
    setIsStudentsShowVisible(false);
  };
  
  useEffect(handleIndexStudents, []);

  return (
    <div>
      <ResumesIndex students={students} onShowStudent={handleShowStudent}/>
      <Modal show ={isStudentsShowVisible} onClose={handleClose}>
        <ResumeShow student ={currentStudent} />
      </Modal>
    </div>
  )
}