import React, { Component } from "react";

import { ErrorCard, ErrorContainer } from "./styles";

type Props = {
  children: JSX.Element;
};

type State = {
  hasError: boolean;
  error: any;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    const { children } = this.props;

    return (
      <>
        {this.state.hasError ? (
          <div>
            {
              <ErrorContainer>
                <ErrorCard
                  title="System Error"
                  bordered={false}
                >
                  <p>{this.state.error.toString()}</p>
                </ErrorCard>
              </ErrorContainer>
            }
          </div>
        ) : (
          children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
