import "./ResumesIndex.css";
import { useState } from "react";
import { TwitterFeed } from "./TwitterFeed";

export function ResumesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
       Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="first_name"/>
      <datalist id="first_name">{props.students.map(student => 
<option key={student.id}>{student.first_name}</option>
      )}
      </datalist>
      
      <div className="container">
        <h1>All Resumes</h1>
        {props.students.filter((student) => student.first_name.toLowerCase().includes(searchFilter.toLowerCase()) || student.last_name.toLowerCase().includes(searchFilter.toLowerCase())).map((student) => (
        <div key={student.id} className="students">
           <br></br>
          <div className="card">
            <div className="card-body">
            <img src={student.photo} alt="" width="50px" height="50px"/>

          <h2>{student.first_name} {student.last_name}</h2>
<br></br>
<h4>Skills</h4>

                {student.skills.map((skill) => (
                  <div key={skill.id}>
                    <ul>
                    <li>{skill.skill_name}</li>
                    </ul>
                  </div>
                ))}
             
          <br></br>
            </div>
            <TwitterFeed tweetID={student.twitter} />
            <button onClick={() => props.onShowStudent(student)}>More Info</button>
          </div>
      </div>
              ))}
      </div>
      </div>
  );
  
}
