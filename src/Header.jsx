export function Header() {
  return (
    <header>
      <nav>
        <div className="mb-3">
          <label form="formGroupExampleInput" className="form-label">Skill 1</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example: Ruby" />
        </div>
        <div className="mb-3">
          <label form="formGroupExampleInput2" className="form-label">SKill 2</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example: JavaScript" />
        </div>
      </nav>
    </header>
  );
}
