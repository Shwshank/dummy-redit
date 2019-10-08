import React from "react";
import { connect } from 'react-redux';

import {
  getDataAction
} from '../actions/action'

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.getDataAction()
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return(
      <div>
        <p> Dashboard works! </p>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    data: state.getDataReducer
   };
};

export default connect(
  mapStateToProps,
  {getDataAction}
)(Dashboard);

// json-server --p 5000 db.json --watch
