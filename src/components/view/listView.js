import React from "react";
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroller";

import {
  getDataAction
} from '../../actions/action'


class ListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: 20,
      hasMoreItems: true
    };
  }

  showItems() {

    // json-server --p 5000 db.json --watch
    // pagination in jsonserver
    // http://localhost:5000/data?_start=1&_end=6

    var items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(<li key={i}> Item {i} </li>);
    }
    return items;
  }

  loadMore() {
    if(this.state.items >= 50){

      this.setState({ hasMoreItems: false});
    }else{
        setTimeout(() => {
        this.setState({ items: this.state.items + 20});
    }, 2000);
    }
  }

  componentWillMount() {
    // this.props.getDataAction()
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
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
)(ListView);
