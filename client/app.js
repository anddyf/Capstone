import React from "react";
import { connect } from "react-redux";

export class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
