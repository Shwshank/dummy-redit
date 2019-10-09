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
          {this.props.votes.upVoteCount}
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button type="button" className="btn btn-lg btn-warning" disabled>
          {this.props.votes.downVoteCount}
        </button>

      </div>
    )
  }
}

export default LikeCounter;
