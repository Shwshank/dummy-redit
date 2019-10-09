import React from "react";
import { connect } from 'react-redux';

import ListView from './view/listView';
import LikeCounter from './likeCounter/likeCounter';

import {
  getDataAction
} from '../actions/action'

class Dashboard extends React.Component {

  componentWillMount() {
    // this.props.getDataAction()
  }

  componentDidUpdate() {
    // console.log(this.props);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-light bg-light fixed-top ">
          <p className="navbar-brand">Navbar</p>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-8 text-center">
              <ListView/>
            </div>
            <div className="col-4 text-center">
              <LikeCounter/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// const mapStateToProps = state => {
//   return {
//     data: state.getDataReducer
//    };
// };

export default Dashboard;
