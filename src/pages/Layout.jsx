import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Container = styled.div`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 16rem 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  background-color: white;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow-y: auto;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const HeaderWrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Layout = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContent>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </Container>
  );
};

export default Layout;
