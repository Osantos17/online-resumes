export function ResumeShow(props) {
console.log(props.student.experiences.map((exp) => 
exp.job))
  return (
    <div>
      <h3>Personal info</h3>
      <img src={props.student.photo} width="50px" height="50px"/>
      <p>Name: {props.student.first_name} {props.student.last_name} </p>
      <p>Bio: {props.student.bio} </p>
      <p>Email: {props.student.email} |
      Phone Number: {props.student.phone} |
      Github: <a href="#">{props.student.github} </a>|
      LinkedIn: <a href="#">{props.student.linkedin} </a>|
      Online Resume: <a href="#">{props.student.online_resume} </a>|
      Blog: <a href="#">{props.student.personal_blog} </a>|
       | Twitter: <a href="#">{props.student.twitter} </a></p>

      <div className = "Company_info">
        <h3>Company info</h3>
        {props.student.experiences.map((exp) => [
          <div key={exp.id}>
          <ul>
<p>Job Title: {exp.job}</p>
  <p>Company Name: {exp.company}</p>
  <p>Job Details: {exp.details}</p>
  <p>Start Date: {exp.start_date}</p>
  <p>End Date: {exp.end_date}</p>
<hr></hr>
  </ul>
</div>
])}
        
      </div>
      <div className="Education_info">
        <h3>Education</h3>
        {props.student.educations.map((ed) => [
          <div key={ed.id}>
          <ul>
<p>University: {ed.university_name}</p>
  <p>Degree: {ed.degree}</p>
  <p>Type of Degree: {ed.details}</p>
  <p>Start Date: {ed.start_date}</p>
  <p>End Date: {ed.end_date}</p>
<hr></hr>
  </ul>
  </div>
  ])}

      </div>
      <div className="Skills">
        <h3>Skills</h3>
        {props.student.skills.map((skill) => [
          <div key={skill.id}>
          <ul>
<li>{skill.skill_name}</li>

  </ul>
  </div>])}
       
      </div>
      <div className="Capstone">
        <h3>Capstone</h3>
        {props.student.capstones.map((cap) => [
          <div key={cap.id}>
          <ul>
<p>Name: {cap.name}</p>
  <p>Description: {cap.description}</p>
  <a href="#">{cap.url}</a>
  <img>{cap.screenshot}</img>
  <hr></hr>
  </ul>
  </div>])}
       
      </div>
    </div>
  );
}