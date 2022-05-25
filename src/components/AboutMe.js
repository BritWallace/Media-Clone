import React from "react";
import PropTypes from "prop-types";

function AboutMe(props) {
  return (
    <p>{props.aboutMe}</p>
  );
}

AboutMe.propTypes = {
  aboutMe: PropTypes.string
};

export default AboutMe;