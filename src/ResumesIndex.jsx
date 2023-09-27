import "./ResumesIndex.css";
import { TwitterFeed } from "./TwitterFeed";

export function ResumesIndex(props) {
  return (
    <div>
      <div className="container">
        <h1>All Resumes</h1>
        {props.students.map((student) => (
          <div key={student.id} className="col">
            <div className="Personal_Info">
              <h3>{student.first_name}'s Resume</h3>
              <div className="profilepic">
                <img src={student.photo} alt="Profile" width="120" height="120" />
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
            <TwitterFeed tweetID={student.twitter} />
            <button onClick={() => props.onShowStudent(student)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
