export function ResumeShow(props) {

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
        <p>Job Title: {props.student.experiences[0].job}</p>
        <p>Company Name: {props.student.experiences[0].company}</p>
        <p>Job Details: {props.student.experiences[0].details}</p>

        <p>Start Date: {props.student.experiences[0].start_date}</p>
        <p>End Date: {props.student.experiences[0].end_date}</p>
      </div>
      <div className="Education_info">
        <h3>Education</h3>
        <p>University: {props.student.educations[0].university_name}</p>
        <p>Degree: {props.student.educations[0].degree}</p>
        <p>Type of Degree: {props.student.educations[0].details}</p>
        <p>Start Date: {props.student.educations[0].start_date}</p>
        <p>End Date: {props.student.educations[0].end_date}</p>
      </div>
      <div className="Skills">
        <h3>Skills</h3>
        <p>Skills: {props.student.skills[0].skill_name}</p>
      </div>
      <div className="Capstone">
        <h3>Capstone</h3>
        <p>Name: {props.student.capstones[0].name}</p>
        <p>Description: {props.student.capstones[0].description}</p>
        <a href="#">{props.student.capstones[0].url}</a>
      </div>
    </div>
  );
}