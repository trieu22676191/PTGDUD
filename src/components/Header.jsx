import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 4rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  color: #ff4081;
  margin: 0;
  font-weight: 500;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 37.5rem;
  margin: 0 2rem;
  position: relative;

  img {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.75rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  color: #000000;

  &:focus {
    outline: none;
    background-color: #eeeeee;
  }

  &::placeholder {
    color: #999;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%)
      hue-rotate(312deg) brightness(101%) contrast(97%);
  }
`;

const Avatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Dashboard</Title>

      <SearchContainer>
        <img src="/src/img/search.png" alt="Search icon" />
        <SearchInput placeholder="Search..." />
      </SearchContainer>

      <RightSection>
        <IconButton>
          <img src="/src/img/question.png" alt="Notification icon" />
        </IconButton>

        <IconButton>
          <img src="/src/img/Bell.png" alt="Help icon" />
        </IconButton>

        <Avatar>
          <img src="/src/img/avt.png" alt="User avatar" />
        </Avatar>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
