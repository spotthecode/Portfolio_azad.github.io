import React from "react";

function WorksProject() {
  return (
    <>
      <div className="project">
        <h1>WORKS/PROJECTS</h1>
        <div className="workProjects">
          <div className="webDesingingContainer">
            <br></br>
            <br></br>
            <h3>Web Designing</h3>
            <div className="cardContainer">
              <div className="card" id="card-1"></div>
              <div className="card" id="card-2"></div>
              <div className="card" id="card-3"></div>
            </div>
          </div>

          <div className="webDevelopmentContainer">
            <br></br>
            <br></br>
            <h3>Front-End Development</h3>
            <div className="cardContainer">
              <div className="card" id="card-1"></div>
              <div className="card" id="card-2"></div>
              {/* <div className="card" id="card-3"></div> */}
            </div>
          </div>

          <div className="miscellaneousContainer">
            <br></br>
            <br></br>
            <h3>Others</h3>
            <div className="cardContainer">
              <div className="card" id="card-1"></div>
              <div className="card" id="card-2"></div>
              {/* <div className="card" id="card-3"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorksProject;
