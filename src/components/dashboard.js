import React from "react";
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ListView from './view/listView';
import CardView from './view/cardView';
import LikeCounter from './likeCounter/likeCounter';

import InfiniteScroll from "react-infinite-scroller";

import {
  getDataAction,
  sortByName,
  sortById
} from '../actions/action'

const viewOptions = [
  { value: 'list', label: 'List' },
  { value: 'card', label: 'Card' }
]

const sortOptions = [
  { value: 'id', label: 'Id' },
  { value: 'name', label: 'Name' }
]

const votes = {upVoteCount:0, downVoteCount:0}

const defaultView = { value: 'list', label: 'List' }
const defaultSort = { value: 'id', label: 'Id' }

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 5,
      items: 5,
      view: "list",
      hasMoreItems: true,
    };
  }

  showItems() {
    if(this.state.view === "list")
      return <ListView data={this.props.data}/>

    if(this.state.view === "card")
      return <CardView data={this.props.data}/>
  }

  loadMore() {
    if(this.state.end >= 15){

      this.setState({ hasMoreItems: false});
    }else{
        setTimeout(() => {
        this.setState({
          items: this.state.items + 5,
          start: this.state.start + 5,
          end: this.state.end + 5,
        });
        this.props.getDataAction(this.state.start, this.state.end)
    }, 1000);
    }
  }

  componentWillMount() {
    this.props.getDataAction(this.state.start, this.state.end)
  }

  componentDidUpdate() {
    console.log(this.props);
    let upVotes = 0;
    let downVotes = 0;
    for(let i=0;i<this.props.data.length; i++) {
      // console.log(this.props.data[i]);
      upVotes += this.props.data[i].upVote
    }
    for(let i=0;i<this.props.data.length; i++) {
      // console.log(this.props.data[i]);
      downVotes += this.props.data[i].downVote
    }

    votes.upVoteCount = upVotes
    votes.downVoteCount = downVotes
  }

  onViewChange = (event)=>{
      this.setState({
        view : event.value
      })
  }

  onSortChange = (event)=>{

    if(event.value === "name") {
      this.props.sortByName()
    }

    if(event.value === "id") {
      this.props.sortById()
    }

      this.setState({
        sortBy : event.value
      })

  }

  render() {
    return(
      <div>

        <Dropdown options={viewOptions} onChange={this.onViewChange} value={defaultView} placeholder="Select view " />

        <Dropdown options={sortOptions} onChange={this.onSortChange} value={defaultSort} placeholder="Select view " />

        <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-8 text-center">

              <div>
                <div style={{height:'700px', overflow:'auto'}}>
                  <InfiniteScroll
                    loadMore={this.loadMore.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={<div className="loader" key={Math.floor(Math.random() * 10)}> Loading... </div>}
                    useWindow={false}
                  >
                    {this.showItems()}
                  </InfiniteScroll>
                </div>
              </div>

            </div>
            <div className="col-4 text-center">
              <LikeCounter votes={votes} />
            </div>
          </div>
        </div>
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
  {getDataAction,
  sortByName,
  sortById}
)(Dashboard);
