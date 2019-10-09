import baseURL from './baseURL';

export const getDataAPI = async(_start=0, _end = 0) =>{
  try{
    const response = await baseURL.get('/data?_start='+_start+'&_end='+_end);
    return response
  } catch(err) {
    console.log(err);
    alert(err)
  }
}
