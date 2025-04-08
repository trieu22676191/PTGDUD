import React from "react";
import styled from "styled-components";
import { ProgressSpinner } from "primereact/progressspinner";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8fafc;
`;

const LoadingText = styled.div`
  margin-top: 1rem;
  color: #666;
  font-size: 1rem;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <div style={{ textAlign: "center" }}>
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="4"
          fill="#f8fafc"
          animationDuration=".5s"
        />
        <LoadingText>Đang tải...</LoadingText>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
