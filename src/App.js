import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
