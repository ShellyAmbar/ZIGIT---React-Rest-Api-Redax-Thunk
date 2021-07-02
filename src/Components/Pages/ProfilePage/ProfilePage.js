import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../../CustomViews/NavBar/ProjectCard/ProjectCard";
import { getUserProjects } from "../../../Redux/Actions/UserActions";

import { connect } from "react-redux";
import "./ProfilePage.css";
const ProfilePage = (props) => {
  const [allprojects, setallprojects] = useState([]);

  useEffect(() => {
    props.getUserProjects();
  }, []);

  return (
    <div className="containerProfile">
      {props.projects != null && props.data != null && (
        <Grid container justify="center" spacing={3}>
          {props.projects.map((value) => (
            <Grid key={value.id} item>
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
    projects: state.user.projects,
    errorMassage: state.user.errorMassage,
    data: state.auth.personalDetailes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserProjects: () => dispatch(getUserProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
