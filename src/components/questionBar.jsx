function QuizzBar() {
  return (
    <div className="bg-red-800 flex justify-evenly flex-col space-y-4 absolute inset-y-0 right-0 w-16">
      <img></img>
      <h1 className="">Frogingle</h1>
      <h2></h2>
      <ul>
        <li>reponse A</li>
        <li>reponse B</li>
        <li>reponse C</li>
        <li>reponse D</li>
      </ul>
    </div>
  );
}

export default QuizzBar;
