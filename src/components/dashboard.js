import React from "react";
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ListView from './view/listView';
import CardView from './view/cardView';
import CompactView from './view/compactView';
import LikeCounter from './likeCounter/likeCounter';

import InfiniteScroll from "react-infinite-scroller";

import {
  getDataAction,
  sortByHot,
  sortByNew,
  sortByTop
} from '../actions/action'

const viewOptions = [
  { value: 'list', label: 'List' },
  { value: 'card', label: 'Card' },
  { value: 'compact', label: 'Compact' }
]

const sortOptions = [
  { value: 'hot', label: 'Hot' },
  { value: 'new', label: 'New' },
  { value: 'top', label: 'Top' }
]

const votes = {upVoteCount:0}

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
      return (
        <div className="container-fluid">
          <div className="row" >
            <div className="col-9" >
              <ListView data={this.props.data}/>
            </div>
            <div className="col-3" >
              <LikeCounter votes={votes} />
            </div>
          </div>
        </div>
      )

    if(this.state.view === "card")
      return (
        <div className="container-fluid">
          <div className="row" >
            <div className="col-9" >
              <CardView data={this.props.data}/>
            </div>
            <div className="col-3" >
              <LikeCounter votes={votes} />
            </div>
          </div>
        </div>
      )

    if(this.state.view === "compact")
      return (
        <div className="container-fluid">
          <div className="row" >
            <div className="col-9" >
              <CompactView data={this.props.data}/>
            </div>
            <div className="col-3" >
              <LikeCounter votes={votes} />
            </div>
          </div>
        </div>
      )
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
  }

  onViewChange = (event)=>{
      this.setState({
        view : event.value
      })
  }

  onSortChange = (event)=>{

    if(event.value === "hot") {
      this.props.sortByHot()
    }

    if(event.value === "new") {
      this.props.sortByNew()
    }

    if(event.value === "top") {
      this.props.sortByTop()
    }

    if(event.value === "id") {
      this.props.sortById()
    }

      this.setState({
        sortBy : event.value
      })

  }

  render() {
    let upVotes = 0;
    for(let i=0;i<this.props.data.length; i++) {
      upVotes += this.props.data[i].upVote
    }

    votes.upVoteCount = upVotes
    return(
      <div>

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Dummy Reddit</a>
        <form className="form-inline">
          <span className="navbar-brand">View</span>
          &nbsp;
          <Dropdown options={viewOptions} onChange={this.onViewChange} value={defaultView} placeholder="Select view " />
          &nbsp;
          &nbsp;
          <span className="navbar-brand">Sort by</span>
          &nbsp;
          <Dropdown options={sortOptions} onChange={this.onSortChange} value={defaultSort} placeholder="Select view " />
          &nbsp;

        </form>
      </nav>

      <div className="banner">
        <img src="https://styles.redditmedia.com/t5_2qt55/styles/bannerPositionedImage_atcdc0ifv4431.png" className="img-fluid mx-auto d-block p-t-1 p-b-1" alt="Responsive image"/>
      </div>

      <div className="text-center p-t-1 p-b-1 bg-lite-color" >
        <span className="subHeading" > View </span>
        &nbsp; &nbsp;
        <a href="#" className="card-link"                   onClick={this.onViewChange.bind(this,{value:"card"})}>
        <i className="fa fa-th-large" aria-hidden="true"></i> Card </a>
        <a href="#" className="card-link"                    onClick={this.onViewChange.bind(this,{value:"list"})}>
        <i className="fa fa-th-list" aria-hidden="true"></i> List </a>

        <a href="#" className="card-link"                    onClick={this.onViewChange.bind(this,{value:"compact"})}>
        <i className="fa fa-list" aria-hidden="true"></i> Compact </a>

        &nbsp; &nbsp; &nbsp; &nbsp;

        <span className="subHeading" > Sort </span>
        &nbsp; &nbsp;

        <a href="#" className="card-link"                    onClick={this.onSortChange.bind(this,{value:"hot"})}>
        <i className="fa fa-fire" aria-hidden="true"></i> Hot </a>

        <a href="#" className="card-link"                    onClick={this.onSortChange.bind(this,{value:"new"})}>
        <i className="fa fa-certificate" aria-hidden="true"></i> New </a>

        <a href="#" className="card-link"                    onClick={this.onSortChange.bind(this,{value:"top"})}>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i> Top </a>


      </div>

      <div style={{height:'62vh', overflow:'auto'}}>
        <InfiniteScroll
          loadMore={this.loadMore.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={<div className="loader text-center" key={Math.floor(Math.random() * 10)}> <h2>  Loading... </h2> </div>}
          useWindow={false}>
          {this.showItems()}
        </InfiniteScroll>
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
  sortByHot,
  sortByNew,
  sortByTop}
)(Dashboard);
