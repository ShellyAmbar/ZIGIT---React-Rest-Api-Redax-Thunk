import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../../CustomViews/NavBar/ProjectCard/ProjectCard";
import { getUserProjects } from "../../../Redux/Actions/UserActions";
import { projects } from "./projects";
import { connect } from "react-redux";
import "./ProfilePage.css";
const ProfilePage = (props) => {
  const [allprojects, setallprojects] = useState([]);

  useEffect(() => {
    props.getUserProjects();
  });

  return (
    <div className="containerProfile">
      {props.userData != null && (
        <Grid container justify="center" spacing={3}>
          {this.props.userData.map((value) => (
            <Grid key={value} item>
              <ProjectCard
                title={value.name}
                description={`Score: ${value.score}, durationInDays:
    ${value.durationInDays}, bugsCount:
    ${value.bugsCount}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("global state", state);
  return {
    userData: state.auth.personalDetailes,
    errorMassage: state.auth.errorMassage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserProjects: () => dispatch(getUserProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
