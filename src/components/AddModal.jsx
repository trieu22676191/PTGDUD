import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ModalContainer = styled.div`
  .p-dialog {
    .p-dialog-header {
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .p-dialog-content {
      padding: 1.5rem;
    }

    .p-dialog-footer {
      padding: 1rem;
      border-top: 1px solid #e5e7eb;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const AddModal = ({ visible, onHide, onAdd }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
    avatar: "/src/img/avt.png", // Default avatar
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName)
      newErrors.customerName = "Please enter customer name";
    if (!formData.company) newErrors.company = "Please enter company name";
    if (!formData.orderValue) newErrors.orderValue = "Please enter order value";
    if (!formData.orderDate) newErrors.orderDate = "Please enter order date";
    if (!formData.status) newErrors.status = "Please select status";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Add new customer failed");
      }

      const newCustomer = await response.json();
      onAdd(newCustomer);
      onHide();
      // Reset form
      setFormData({
        customerName: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "",
        avatar: "/src/img/avt.png",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
      setErrors({ submit: "Add new customer failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ModalContainer>
      <Dialog
        visible={visible}
        onHide={onHide}
        header="Add new customer"
        style={{ width: "500px" }}
        closeIcon="pi pi-times"
        closable={true}
        footer={
          <div>
            <Button
              label="Cancel"
              icon="pi pi-times"
              onClick={onHide}
              severity="danger"
              style={{
                backgroundColor: "#DC2626",
                color: "white",
                border: "none",
              }}
            />
            <Button
              label="Save"
              icon="pi pi-check"
              onClick={handleSubmit}
              loading={isLoading}
              severity="success"
              style={{
                backgroundColor: "#22C55E",
                color: "white",
                border: "none",
                marginLeft: "0.5rem",
              }}
            />
          </div>
        }
      >
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Customer Name</Label>
            <InputText
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className={errors.customerName ? "p-invalid" : ""}
            />
            {errors.customerName && (
              <ErrorMessage>{errors.customerName}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Company</Label>
            <InputText
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={errors.company ? "p-invalid" : ""}
            />
            {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Order Value</Label>
            <InputText
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              className={errors.orderValue ? "p-invalid" : ""}
            />
            {errors.orderValue && (
              <ErrorMessage>{errors.orderValue}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Order Date</Label>
            <InputText
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              className={errors.orderDate ? "p-invalid" : ""}
            />
            {errors.orderDate && (
              <ErrorMessage>{errors.orderDate}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Status</Label>
            <InputText
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={errors.status ? "p-invalid" : ""}
            />
            {errors.status && <ErrorMessage>{errors.status}</ErrorMessage>}
          </FormGroup>

          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        </form>
      </Dialog>
    </ModalContainer>
  );
};

export default AddModal;
