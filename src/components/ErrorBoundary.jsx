import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8fafc;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #ff4081;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e91e63;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Đã xảy ra lỗi</ErrorTitle>
          <ErrorMessage>
            Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>Thử lại</RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
