import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  HiShoppingCart,
  HiCurrencyDollar,
  HiUserAdd,
  HiDownload,
  HiUpload,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import Overview from "../components/Overview";
import EditModal from "../components/EditModal";
import AddModal from "../components/AddModal";

const DashboardContainer = styled.div`
  padding: 1rem;

  .p-datatable {
    .p-paginator {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border: none;
      padding: 1rem 0;
      position: relative;

      &::before {
        content: "${(props) => props.resultCount} results";
        position: absolute;
        left: 0;
        font-size: 0.875rem;
        color: #6b7280;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #e5e7eb;
  background: white;
  color: ${(props) => props.color || "#ff4081"};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.hoverBg || "#fff1f6"};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ErrorContainer = styled.div`
  margin: 1rem 0;
`;
const PaginatorLeft = styled.div`
  text-align: left;
  margin-left: 0;
`;

const ActionButton = styled(Button)`
  padding: 0.5rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;

const AddButton = styled(Button)`
  background-color: #22c55e;
  border: none;
  margin-right: 1rem;

  &:hover {
    background-color: #16a34a !important;
  }
`;

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:3000/customers");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setEditModalVisible(true);
  };

  const handleAdd = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  const handleSave = (updatedCustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  const statusBodyTemplate = (rowData) => {
    return <StatusBadge status={rowData.status}>{rowData.status}</StatusBadge>;
  };

  const customerBodyTemplate = (rowData) => {
    return (
      <CustomerCell>
        <Avatar src={rowData.avatar} alt={rowData.customerName} />
        {rowData.customerName}
      </CustomerCell>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <ActionButton
        icon="pi pi-pencil"
        onClick={() => handleEdit(rowData)}
        tooltip="Chỉnh sửa"
        tooltipOptions={{ position: "top" }}
      />
    );
  };

  const paginatorLeft = (
    <PaginatorLeft>{customers.length} results</PaginatorLeft>
  );

  const paginatorTemplate = {
    layout:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",
    CurrentPageReport: (options) => {
      return paginatorLeft;
    },
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ProgressSpinner />
      </LoadingContainer>
    );
  }

  return (
    <DashboardContainer resultCount={customers.length}>
      <Overview />

      <ReportHeader>
        <Title>Detailed report</Title>
        <ButtonGroup>
          <AddButton
            label="Add User"
            icon="pi pi-user-plus"
            onClick={() => setAddModalVisible(true)}
          />
          <StyledButton color="#ff4081" hoverBg="#fff1f6">
            <HiUpload />
            Import
          </StyledButton>
          <StyledButton color="#0ea5e9" hoverBg="#f0f9ff">
            <HiDownload />
            Export
          </StyledButton>
        </ButtonGroup>
      </ReportHeader>

      {error && (
        <ErrorContainer>
          <Message severity="error" text={error} />
        </ErrorContainer>
      )}

      <DataTable
        value={customers}
        paginator
        rows={5}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        tableStyle={{ minWidth: "50rem" }}
        emptyMessage="Không có dữ liệu"
        className="p-datatable-customers"
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column
          field="customerName"
          header="CUSTOMER NAME"
          body={customerBodyTemplate}
          sortable
          style={{ minWidth: "14rem" }}
        />
        <Column
          field="company"
          header="COMPANY"
          sortable
          style={{ minWidth: "14rem" }}
        />
        <Column
          field="orderValue"
          header="ORDER VALUE"
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="orderDate"
          header="ORDER DATE"
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="status"
          header="STATUS"
          body={statusBodyTemplate}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          header="ACTIONS"
          body={actionBodyTemplate}
          style={{ minWidth: "5rem" }}
        />
      </DataTable>

      <EditModal
        visible={editModalVisible}
        onHide={() => setEditModalVisible(false)}
        customer={selectedCustomer}
        onSave={handleSave}
      />

      <AddModal
        visible={addModalVisible}
        onHide={() => setAddModalVisible(false)}
        onAdd={handleAdd}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
