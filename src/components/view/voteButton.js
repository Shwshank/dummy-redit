import React from "react";

class VoteButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{
  };

  voteUpFun = (count) =>{
    console.log(count);
  }

  voteDownFun = (count) =>{
    console.log(count);
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

export default VoteButton;
