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


        <span onClick={this.voteUpFun.bind(this,this.props.upVote)}>
        &nbsp;<i className="fa fa-arrow-up" aria-hidden="true"></i>
        </span>

        <br/>
          {this.props.upVote}
        <br/>

        <span onClick={this.voteDownFun.bind(this,this.props.upVote)}>
        &nbsp;<i className="fa fa-arrow-down" aria-hidden="true"></i>
        </span>

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
