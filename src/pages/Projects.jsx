import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      {/* Content will be added here */}
    </ProjectsContainer>
  );
};

export default Projects;
