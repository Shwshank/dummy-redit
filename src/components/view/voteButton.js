import React from "react";
import { connect } from 'react-redux';

import {
  upVoteAction,
  downVoteAction
} from '../../actions/action'

class VoteButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{
  };

  voteUpFun = (count) =>{
    console.log(count);
    this.props.upVoteAction(this.props.id)
  }

  voteDownFun = (count) =>{
    console.log(count);
    this.props.downVoteAction(this.props.id)
  }

  displayButtons() {
    return (
      <div>
        <hr/>
        <button type="button" className="btn btn-info" onClick={this.voteUpFun.bind(this,this.props.upVote)}> {this.props.upVote} </button>

        &nbsp; &nbsp; &nbsp;

        <button type="button" className="btn btn-warning"
        onClick={this.voteDownFun.bind(this,this.props.downVote)}> {this.props.downVote} </button>
      </div>
    )
  }

  render = () => {
    return (
      <div>
        {this.displayButtons()}
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
  {upVoteAction,
  downVoteAction}
)(VoteButton);
