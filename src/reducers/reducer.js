import _ from 'lodash';
import { combineReducers } from 'redux';

const getData = (state=[], action) =>{

  switch(action.type) {

    case 'GET_DATA': {
        state = action.payload
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
