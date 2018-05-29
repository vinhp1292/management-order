import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
class App extends Component {
  render() {
    return (
      <div>
        <p>Management Orders</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);