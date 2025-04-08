import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  padding: 1.25rem;
  img {
    height: 40px;
    width: auto;
  }
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.875rem 1.25rem;
  text-decoration: none;
  color: #666;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 8px;
  margin: 0.25rem 0.75rem;

  &:hover {
    border-color: #ff4081;
    color: #ff4081;
  }

  img {
    margin-right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  &.active {
    border-color: #ff4081;
    color: #ff4081;
    font-weight: 500;
    background-color: #fff1f6;
  }
`;

const PromotionCard = styled.div`
  margin: auto 0.75rem 1rem;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.75rem;
  text-align: center;
`;

const PromotionImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const PromotionText = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  margin: 0.5rem 0;
`;

const TryNowButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff4081;
    color: #ff4081;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <img src="/src/img/logo.png" alt="Logo" />
      </Logo>

      <MenuItem
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/dashboard.png" alt="Dashboard icon" />
        Dashboard
      </MenuItem>

      <MenuItem
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/project.png" alt="Projects icon" />
        Projects
      </MenuItem>

      <MenuItem
        to="/teams"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/team.png" alt="Teams icon" />
        Teams
      </MenuItem>

      <MenuItem
        to="/analytics"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/analytic.png" alt="Analytics icon" />
        Analytics
      </MenuItem>

      <MenuItem
        to="/messages"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/chat.png" alt="Messages icon" />
        Messages
      </MenuItem>

      <MenuItem
        to="/integrations"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src="/src/img/code.png" alt="Integrations icon" />
        Integrations
      </MenuItem>

      <PromotionCard>
        <PromotionImage src="/src/img/Group.png" alt="V2.0 promotion" />
        <PromotionText>v2.0 is available</PromotionText>
        <TryNowButton>Try now</TryNowButton>
      </PromotionCard>
    </SidebarContainer>
  );
};

export default Sidebar;
