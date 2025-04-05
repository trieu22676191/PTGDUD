import React from "react";
import styled from "styled-components";

const TeamsContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Teams = () => {
  return (
    <TeamsContainer>
      <Title>Teams</Title>
      {/* Content will be added here */}
    </TeamsContainer>
  );
};

export default Teams;
