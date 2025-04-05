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

const DetailedReportSection = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ReportTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #e5e7eb;
  background: ${(props) => (props.primary ? "#ff4081" : "white")};
  color: ${(props) => (props.primary ? "white" : "#333")};

  &:hover {
    opacity: 0.9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  border-bottom: 1px solid #e5e7eb;
`;

const Td = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: #333;
  border-bottom: 1px solid #e5e7eb;
`;

const CustomerCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${(props) => {
    switch (props.status) {
      case "new":
        return "#e0f2fe";
      case "in-progress":
        return "#fef3c7";
      case "completed":
        return "#dcfce7";
      default:
        return "#f3f4f6";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "new":
        return "#0284c7";
      case "in-progress":
        return "#d97706";
      case "completed":
        return "#15803d";
      default:
        return "#374151";
    }
  }};
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

      <DetailedReportSection>
        <ReportHeader>
          <ReportTitle>Detailed Report</ReportTitle>
          <ButtonGroup>
            <Button>Import</Button>
            <Button primary>Export</Button>
          </ButtonGroup>
        </ReportHeader>

        <Table>
          <thead>
            <tr>
              <Th>
                <input type="checkbox" />
              </Th>
              <Th>CUSTOMER NAME</Th>
              <Th>COMPANY</Th>
              <Th>ORDER VALUE</Th>
              <Th>ORDER DATE</Th>
              <Th>STATUS</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>{/* Data rows will be mapped here */}</tbody>
        </Table>
      </DetailedReportSection>
    </DashboardContainer>
  );
};

export default Dashboard;
