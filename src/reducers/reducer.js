import _ from 'lodash';
import { combineReducers } from 'redux';

const getData = (state=[], action) =>{

  switch(action.type) {

    case 'GET_DATA': {
        state = [...state, ...action.payload]
        state = _.uniqBy(state, 'id')
        return [...state]
    }

    case 'SORT_DATA_BY_NAME': {
        state = _.sortBy(state, o => o.name)
        return [...state]
    }

    case 'SORT_DATA_BY_ID': {
        state = _.sortBy(state, o => o.id)
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
