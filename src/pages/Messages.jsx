import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Messages = () => {
  return (
    <MessagesContainer>
      <Title>Messages</Title>
      {/* Content will be added here */}
    </MessagesContainer>
  );
};

export default Messages;
