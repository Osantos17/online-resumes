export function ResumesIndex(props) {
  return (
    <div>
      <h1>All Resumes</h1>

      {props.students.map((student) => (
        <div key={student.id}>
          <div className="Personal_Info">
            <p>Name: {student.first_name}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Linkedin: {student.linkedin}</p>
            <p>GitHub: {student.github}</p>
            <p>Link: {student.online_resume}</p>
            <p>Bio: {student.bio}</p>
          </div>
          <button onClick={() => props.onShowStudent(student)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
