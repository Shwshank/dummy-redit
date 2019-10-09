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
