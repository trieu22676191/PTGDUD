import React from "react";
import styled from "styled-components";
import { HiShoppingCart, HiCurrencyDollar, HiUserAdd } from "react-icons/hi";

const DashboardContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const OverviewSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const OverviewCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  min-height: 160px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${(props) => props.accentColor || "#ff4081"};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  margin: 0;
`;

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: ${(props) => props.background || "#ffe5ec"};
  color: ${(props) => props.color || "#ff4081"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Value = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
`;

const Growth = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const GrowthValue = styled.span`
  color: ${(props) => (props.isPositive ? "#22c55e" : "#ef4444")};
  font-weight: 500;
`;

const GrowthLabel = styled.span`
  color: #666;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title>Overview</Title>
      <OverviewSection>
        <OverviewCard accentColor="#ff4081" />
        <OverviewCard accentColor="#0ea5e9" />
        <OverviewCard accentColor="#6366f1" />
      </OverviewSection>
    </DashboardContainer>
  );
};

export default Dashboard;
