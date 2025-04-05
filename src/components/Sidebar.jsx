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
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <img src="/src/img/logo.png" alt="Logo" />
      </Logo>

      <MenuItem to="/dashboard">
        <img src="/src/img/dashboard.png" alt="Dashboard icon" />
        Dashboard
      </MenuItem>

      <MenuItem to="/projects">
        <img src="/src/img/project.png" alt="Projects icon" />
        Projects
      </MenuItem>

      <MenuItem to="/teams">
        <img src="/src/img/team.png" alt="Teams icon" />
        Teams
      </MenuItem>

      <MenuItem to="/analytics">
        <img src="/src/img/analytic.png" alt="Analytics icon" />
        Analytics
      </MenuItem>

      <MenuItem to="/messages">
        <img src="/src/img/chat.png" alt="Messages icon" />
        Messages
      </MenuItem>

      <MenuItem to="/integrations">
        <img src="/src/img/code.png" alt="Integrations icon" />
        Integrations
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
