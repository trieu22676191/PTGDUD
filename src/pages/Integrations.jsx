import React from "react";
import styled from "styled-components";

const IntegrationsContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Integrations = () => {
  return (
    <IntegrationsContainer>
      <Title>Integrations</Title>
      {/* Content will be added here */}
    </IntegrationsContainer>
  );
};

export default Integrations;
