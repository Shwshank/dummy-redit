import React from "react";
import VoteButton from "./voteButton";

class CompactView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value:""};
  }

  componentDidUpdate = () =>{};

  displayData() {
    if(this.props.data.length) {
      var items = [];

      for (var i = 0; i < this.props.data.length; i++) {
        items.push(
            <div key={this.props.data[i].id}>
              <div key={this.props.data[i].id} className="card ">
                <div className="card-body" >
                  <div className="card-title">
                    <div className="count" >

                      <VoteButton
                      upVote={this.props.data[i].upVote} downVote={this.props.data[i].downVote} id={this.props.data[i].id}/>

                    </div>
                    {(i+1)}. <b> {this.props.data[i].title} </b> <span>, id: {this.props.data[i].id}, </span>
                    <i> posted by: {this.props.data[i].postedBy}</i>
                    <div className="mb-2 text-muted">
                      {this.props.data[i].title} by {this.props.data[i].postedBy}, {this.props.data[i].timeOfPost} <br/>
                    </div>

                    <button type="button" className="btn btn-warning"><i className="fa fa-comments-o" aria-hidden="true"></i> {this.props.data[i].comments}</button>
                    &nbsp;
                    <button type="button" className="btn btn-info"> <i className="fa fa-thumbs-up" aria-hidden="true"></i> {this.props.data[i].upVote}</button>

                  </div>
                </div>
              </div>
              <br/>
            </div>
          );
        }
      return items;
    }
  }

  render = () => {
    return (
      <div>
        {this.displayData()}
      </div>
    )
  }
}

export default CompactView;
