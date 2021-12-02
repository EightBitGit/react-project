import img4 from "./images2/img4.jpg";
function AboutMe() {
  //
  return (
    <div>
      <h1>About Me</h1>
      <h2> I'm from Richmond, VA</h2>
      <h4>
        Education Full Sail University — Bachelor of Fine Arts in Creative
        Writing
      </h4>
      <h4>ServSafe Manager Certification</h4>

      <div>
        {" "}
        <img src={img4} alt="mnt4" />{" "}
      </div>
    </div>
  );
}

export default AboutMe;
