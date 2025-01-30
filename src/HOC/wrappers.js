import React from 'react';

// HOC that adds a "loading" state to a component
function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const { isLoading, ...otherProps } = props;

    if (isLoading) {
      return <div>Loading...</div>; // Shows a loading state if isLoading is true
    }

    return <WrappedComponent {...otherProps} />;
  };
}

export default withLoading;

// Regular component
function MyComponent({ name }) {
    return <div>Hello, {name}!</div>;
  }
  
  // Wrapping MyComponent with the withLoading HOC
  const MyComponentWithLoading = withLoading(MyComponent);
  
  // Usage
export function App() {
    return (
      <div>
        <MyComponentWithLoading isLoading={true} name="John" />
        <MyComponentWithLoading isLoading={false} name="Alice" />
      </div>
    );
  }