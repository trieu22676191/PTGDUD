import React from "react";
import styled from "styled-components";
import { HiShoppingCart, HiCurrencyDollar, HiUserAdd } from "react-icons/hi";

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
  margin: 1rem 0;
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

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Overview = () => {
  return (
    <>
      <Title>Overview</Title>
      <OverviewSection>
        {/* Turnover Card */}
        <OverviewCard accentColor="#ff4081">
          <CardHeader>
            <CardTitle>Turnover</CardTitle>
            <IconWrapper background="#ffe5ec" color="#ff4081">
              <HiShoppingCart />
            </IconWrapper>
          </CardHeader>
          <Value>$92,405</Value>
          <Growth>
            <GrowthValue isPositive>↑ 5.39%</GrowthValue>
            <GrowthLabel>period of change</GrowthLabel>
          </Growth>
        </OverviewCard>

        {/* Profit Card */}
        <OverviewCard accentColor="#0ea5e9">
          <CardHeader>
            <CardTitle>Profit</CardTitle>
            <IconWrapper background="#e0f2fe" color="#0ea5e9">
              <HiCurrencyDollar />
            </IconWrapper>
          </CardHeader>
          <Value>$32,218</Value>
          <Growth>
            <GrowthValue isPositive>↑ 5.39%</GrowthValue>
            <GrowthLabel>period of change</GrowthLabel>
          </Growth>
        </OverviewCard>

        {/* New Customer Card */}
        <OverviewCard accentColor="#0ea5e9">
          <CardHeader>
            <CardTitle>New customer</CardTitle>
            <IconWrapper background="#e0f2fe" color="#0ea5e9">
              <HiUserAdd />
            </IconWrapper>
          </CardHeader>
          <Value>298</Value>
          <Growth>
            <GrowthValue isPositive>↑ 6.84%</GrowthValue>
            <GrowthLabel>period of change</GrowthLabel>
          </Growth>
        </OverviewCard>
      </OverviewSection>
    </>
  );
};

export default Overview;
