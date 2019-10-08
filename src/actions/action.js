import {
  getDataAPI
} from '../services/apiServices'

// get data
export const getDataAction = () => async dispatch =>{
  let data = []

  getDataAPI().then(res=>{
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
