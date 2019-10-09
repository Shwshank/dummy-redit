import _ from 'lodash';
import { combineReducers } from 'redux';

const getData = (state=[], action) =>{

  switch(action.type) {

    case 'GET_DATA': {
        state = [...state, ...action.payload]
        state = _.uniqBy(state, 'id')
        return [...state]
    }

    case 'SORT_DATA_BY_HOT': {
        state = _.orderBy(state, o => o.comments, 'desc')
        return [...state]
    }

    case 'SORT_DATA_BY_NEW': {
        state = _.orderBy(state, o => o.timeOfPost, 'asc')
        return [...state]
    }

    case 'SORT_DATA_BY_TOP': {
        state = _.orderBy(state, o => o.upVote, 'desc')
        return [...state]
    }

    case 'VOTE_UP': {
      let index = _.findIndex(state, {id:action.payload})
      if( index=== -1 ) {
        return [...state]
      } else {
        state[index].upVote++;
        state[index].downVote--
      }
      return [...state]
    }

    case 'VOTE_DOWN': {
      let index = _.findIndex(state, {id:action.payload})
      if( index=== -1 ) {
        return [...state]
      } else {
        state[index].downVote++;
        state[index].upVote--
      }
      return [...state]
    }

    default:{
      return [...state]
    }
  }
}


export default combineReducers({
  getDataReducer: getData,
})
