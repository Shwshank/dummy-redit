import React from "react";

class LikeCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{

  };


  render = () => {
    return (
      <div>

        <button type="button" className="btn btn-lg btn-info" disabled>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp;
          {this.props.votes.upVoteCount}
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="button" className="btn btn-lg btn-warning" disabled>
        <i className="fa fa-thumbs-down" aria-hidden="true"></i> &nbsp; 
          {this.props.votes.downVoteCount}
        </button>

      </div>
    )
  }
}

export default LikeCounter;
