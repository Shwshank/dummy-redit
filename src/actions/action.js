import {
  getDataAPI
} from '../services/apiServices'

// get data
export const getDataAction = (_start=0, _end = 0) => async dispatch =>{
  let data = []

  getDataAPI(_start, _end).then(res=>{
    if(res) {
      if(res.status===200||res.status===201)
      data = res.data;
      dispatch({
        type: 'GET_DATA',
        payload: data
      })
    }
  })
}

export const sortByName =()=>{
  return({
    type: 'SORT_DATA_BY_NAME'
  })
}

export const sortById =()=>{
  return({
    type: 'SORT_DATA_BY_ID'
  })
}

export const upVoteAction=(id)=>{
  return({
    type: 'VOTE_UP',
    payload: id
  })
}

export const downVoteAction=(id)=>{
  return({
    type: 'VOTE_DOWN',
    payload: id
  })
}
