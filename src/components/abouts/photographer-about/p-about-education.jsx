import React from 'react';

const PhotographerAboutEducation = () => {
  return (
    <div className="about__education">
      <div className="about__education-des">
        <p>
          <a href="#">University of houston</a>,US, Pa.{" "}
          <a href="#">Bachelor Degree of Design</a> in{" "}
          <a href="#">Advertising</a>; Minor: Spanish; GPA:
          3.95, anticipated in May 2012
        </p>
      </div>
      <h4 className="about__education-title">
        Notable Accomplishments:
      </h4>
      <div className="about__education-list">
        <ul>
          <li>{"Dean's"} List: Fall 2014, Spring 2020</li>
          <li>
            Awarded Best Advertising Campaign Proposal for
            Photography Committee, State University, Spring
            2012
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhotographerAboutEducation;