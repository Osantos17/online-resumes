import "./ResumesIndex.css";
import { TwitterFeed } from "./TwitterFeed"

export function ResumesIndex(props) {
  return (
    <div>
      <div className="container">
        <h1>All Resumes</h1>
        <div className="row align-items">
          {props.students.map((student) => (
            <div key={student.id} className="col">
              <div className="Personal_Info">
                <h3>{student.first_name}'s Resume</h3>
                <div className="profilepic">
                  <img src={student.photo} alt="Profile" width="120" height="120" />
                </div>
                 <hr />
                 <div class='twitter'> 
                    < TwitterFeed />
                  </div>
                <div className="profileinfo">
                  <p>Name - {student.first_name}</p>
                  {student.skills.map((skill) => (
                    <div key={skill.id}>
                      <p>Skills - {skill.skill_name}</p>
                    </div>
                  ))}
                  <p>Experience - {student.experiences[0].job}</p>
                  <p>Education - {student.educations[0].degree}</p>
                </div>
              </div>
              <button className="info" onClick={() => props.onShowStudent(student)}><span>View Resume</span></button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
