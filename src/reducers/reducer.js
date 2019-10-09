import _ from 'lodash';
import { combineReducers } from 'redux';

const getData = (state=[], action) =>{

  switch(action.type) {

    case 'GET_DATA': {

        state = [...state, ...action.payload]
        state = _.uniqBy(state, 'id')
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
