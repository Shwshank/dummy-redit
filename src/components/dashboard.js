import React from "react";
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ListView from './view/listView';
import CardView from './view/cardView';
import LikeCounter from './likeCounter/likeCounter';

import InfiniteScroll from "react-infinite-scroller";

import {
  getDataAction
} from '../actions/action'

const viewOptions = [
  { value: 'list', label: 'List' },
  { value: 'card', label: 'Card' }
]

const defaultView = { value: 'list', label: 'List' }

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
  }

  onViewChange = (event)=>{

      this.setState({
        view : event.value
      })

  }

  render() {
    return(
      <div>

        <Dropdown options={viewOptions} onChange={this.onViewChange} value={defaultView} placeholder="Select view " />

        <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-8 text-center">

              <div>
                <div style={{height:'200px', overflow:'auto'}}>
                  <InfiniteScroll
                    loadMore={this.loadMore.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={<div className="loader"> Loading... </div>}
                    useWindow={false}
                  >
                    {this.showItems()}
                  </InfiniteScroll>
                </div>
              </div>

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

const mapStateToProps = state => {
  return {
    data: state.getDataReducer
   };
};

export default connect(
  mapStateToProps,
  {getDataAction}
)(Dashboard);
