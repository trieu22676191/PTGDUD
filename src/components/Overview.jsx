import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;

  img {
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
  const [stats, setStats] = useState({
    turnover: 0,
    profit: 0,
    customers: 0,
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:3000/customers");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Tính tổng giá trị đơn hàng (turnover)
      const totalTurnover = data.reduce(
        (sum, customer) =>
          sum + parseFloat(customer.orderValue.replace("$", "")),
        0
      );

      // Tính lợi nhuận với thuế 10%
      const totalProfit = totalTurnover * 0.1;
      const profit = totalTurnover - totalProfit;

      // Đếm số lượng khách hàng
      const customerCount = data.length;

      setStats({
        turnover: totalTurnover,
        profit: profit,
        customers: customerCount,
      });
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Format số thành định dạng tiền tệ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <Title>Overview</Title>
      <OverviewSection>
        {/* Turnover Card */}
        <OverviewCard accentColor="#ff4081">
          <CardHeader>
            <CardTitle>Turnover</CardTitle>
            <IconWrapper background="#ffe5ec">
              <img src="/src/img/cart.png" alt="Cart icon" />
            </IconWrapper>
          </CardHeader>
          <Value>{formatCurrency(stats.turnover)}</Value>
          <Growth>
            <GrowthValue isPositive>↑ 5.39%</GrowthValue>
            <GrowthLabel>period of change</GrowthLabel>
          </Growth>
        </OverviewCard>

        {/* Profit Card */}
        <OverviewCard accentColor="#0ea5e9">
          <CardHeader>
            <CardTitle>Profit</CardTitle>
            <IconWrapper background="#e0f2fe">
              <img src="/src/img/dollar.png" alt="Dollar icon" />
            </IconWrapper>
          </CardHeader>
          <Value>{formatCurrency(stats.profit)}</Value>
          <Growth>
            <GrowthValue isPositive>↑ 5.39%</GrowthValue>
            <GrowthLabel>period of change</GrowthLabel>
          </Growth>
        </OverviewCard>

        {/* New Customer Card */}
        <OverviewCard accentColor="#0ea5e9">
          <CardHeader>
            <CardTitle>New customer</CardTitle>
            <IconWrapper background="#e0f2fe">
              <img src="/src/img/user.png" alt="User icon" />
            </IconWrapper>
          </CardHeader>
          <Value>{stats.customers}</Value>
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
