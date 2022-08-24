import React from "react";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="aboutMe">
        <h1>ABOUT ME </h1>
        <p>Hey,</p>
        <p>
          I'm Azad, 21 years old UI/UX Desinger and Front-end web developer.{" "}
          <br></br>with only practical experience without Degree.
        </p>
      </div>

      <div className="educations">
        <h1>EDUCATIONS</h1>
        <p>
          <b>CGPA 8.48</b>
        </p>
        <p>Diploma in Computer Science and Engineering</p>
        <p>Grad-Aug 2022</p>
        <p>Government Polytechnic, Chapra</p>
        <p>SBTE Patna</p>

        <br></br>

        <p>
          <b>76.4%</b>
        </p>
        <p>Class-XII, science(PCM)</p>
        <p>Grad- march 2019</p>
        <p>RSS Inter College Chochahan, Muzaffarpur</p>
        <p>BSEB Patna</p>

        <br></br>

        <p>
          <b>70.2%</b>
        </p>
        <p>Class-X</p>
        <p>Grad- June 2017</p>
        <p>RK High School Sain, Vaishali</p>
        <p>BSEB Patna</p>
      </div>

      {/* ****SKILLS**** */}

      <div className="skills">
        <h1>SKILLS</h1>
        <div className="skillContainer">
          <div className="programmingContainer">
            <p>
              <b>Programming Language: </b> C, C++, Python.
            </p>
          </div>
          <div className="webContainer">
            <p>
              <b>Web Development:</b> HTML, CSS, JavaScript, PHP, ReactJS.
            </p>
          </div>
          <div className="toolsContainer">
            <p>
              <b>Tools:</b> VS Code, Github, Adobe XD, Illustrator, Photoshop,
              Figma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
