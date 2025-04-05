import React from "react";
import styled from "styled-components";

const AnalyticsContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Analytics = () => {
  return (
    <AnalyticsContainer>
      <Title>Analytics</Title>
      {/* Content will be added here */}
    </AnalyticsContainer>
  );
};

export default Analytics;
